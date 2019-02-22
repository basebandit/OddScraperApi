import Joi from "joi"
import userAgent from "useragent"

userAgent(true)

export default {
  getMatch(req, res, next) {
    const ua = userAgent.parse(req.headers["user-agent"])
    // console.log(ua.os.toString())
    console.log(ua.family)
    const schema = {
      pseudoKey: Joi.string().regex(/^(?:([a-zA-Z]+-)+[a-zA-Z]+)$/)
    }
    //regex(/((?:w+-)+w+)/)
    const { error, value } = Joi.validate(req.params, schema)
    if (error) {
      switch (error.details[0].context.key) {
        case "pseudoKey":
          console.log(error.details[0].message)
          res.status(400).send({
            error: error.details[0].message
          })
          break
        default:
          res.status(400).send({
            error: "Invalid request"
          })
      }
    } else {
      next()
    }
  }
}
