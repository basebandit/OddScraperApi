import jwt from "jsonwebtoken"
import config from "../config"
import User from "../models/UserModel"

export default {
  verify(req, res, next) {
    let token = req.headers["authorization"]
    if (token && token.indexOf("Bearer") !== -1) {
      try {
        token = token.split(" ")[1].trim()
        jwt.verify(
          token,
          config.authentication.secret,
          async (err, decoded) => {
            const { email, password } = decoded
            const user = await User.findOne({ email: email })
            if (!user) {
              return res
                .status(403)
                .json({ responseCode: 403, responseMessage: "Forbidden" })
            }
            if (password === user.password) {
              next()
            }
          }
        )
      } catch (err) {
        return res
          .status(403)
          .json({ responseCode: 500, responseMessage: "Unauthorized" })
      }
    } else {
      res.status(403).json({ responseCode: 403, responseMessage: "Forbidden" })
    }
  }
}
