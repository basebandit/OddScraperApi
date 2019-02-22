import express from "express"
import bodyParser from "body-parser"
import consolidate from "consolidate"
import mongoose from "mongoose"
import config from "./config"
import scrapeRoutes from "./routes/scrape"
import matchRoutes from "./routes/match"
import authRoutes from "./routes/auth"
import helmet from "helmet"
import morgan from "morgan"
import path from "path"
import fs, { readFileSync } from "fs"
import rfs from "rotating-file-stream"
import { fstat } from "fs"

/**
 * Global constants
 */
const app = express()
const port = 3333
const uri = `mongodb://${config.user}:${config.pwd}@${config.host}:${
  config.port
}/${config.db}`

const logDirectory = path.join(__dirname, "log")

//ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

//create a rotating write stream
const accessLogStream = rfs("access.log", {
  interval: "1d", //rotate daily
  path: logDirectory
})

const router = express.Router()
/**
 * Main method
 */
const start = () => {
  /**
   * Middlewares
   */
  app.set("trust proxy", true) //get client remote address from proxy
  app.use(helmet()) //secure our server
  app.use(bodyParser.json()) //translate json payloads
  app.use(bodyParser.urlencoded({ extended: true })) //translate form data payloads - for testing
  app.use(morgan("combined", { stream: accessLogStream })) //log http requests
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", req.header("Origin"))
    res.header("Access-Control-Allow-Credentials", "true")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    res.header("X-Robots-Tag", "noindex")
    next()
  })

  /**
   * Routes
   */
  //scraper
  app.use("/api/v1/scrape", scrapeRoutes)
  //matches
  app.use("/api/v1/matches", matchRoutes)
  //authentication
  app.use("/api/v1/auth", authRoutes)
  app.use("/api/v1/doc/", express.static(path.join(__dirname + "/docs/api/"))) //api documentation
  //certbot verification challenge
  app.use(express.static("static"))
  //server health check
  app.get("/health-check", (req, res) => res.sendStatus(200))

  /**
   * Mongoose connection
   */
  mongoose.Promise = global.Promise
  mongoose.connect(
    uri,
    {
      useNewUrlParser: true,
      reconnectTries: Number.MAX_VALUE,
      reconnectInterval: 1000
    }
  )

  mongoose.connection.once("open", () => {
    console.log("Successfully connected to the database")
    app.listen(port, () => {
      console.log("Server live on ", port)
    })
  })
  mongoose.connection.on("error", err => {
    console.log(err.message)
  })
  process.on("UnhandledRejection", (reason, promise) => {
    console.log("Unhandled rejection at: ", reason.stack || reason)
  })
} //End of start

start()
