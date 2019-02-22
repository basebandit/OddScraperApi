import User from "../models/UserModel"
import jwt from "jsonwebtoken"
import config from "../config"
import randtoken from "rand-token"

let refreshTokens = {}

function jwtSignUser(user) {
  const SIX_MINS = 60 * 6
  const token = jwt.sign(user, config.authentication.secret)
  return {
    accessToken: token
  }
}

export default {
  async register(req, res) {
    const { email, password } = req.body
    res.status(200).json({
      responseCode: 200,
      responseMessage: email + " try harder " + password
    })
    // try {
    //   const { email, password } = req.body
    //   let user = new User({
    //     email: email,
    //     password: password
    //   })
    //   user = await user.save()

    //   res.status(200).json({
    //     responseCode: 200,
    //     responseMessage: "User registration request successful"
    //   })
    // } catch (err) {
    //   res.status(500).json({
    //     responseCode: 500,
    //     responseMessage: "User registration failed.This email is already in use"
    //   })
    // }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body
      let user = await User.findOne({ email: email })
      if (!user) {
        return res.status(500).json({
          responseCode: 500,
          responseMessage: "The login information was incorrect"
        })
      }
      user.comparePassword(password, function(err, isMatch) {
        if (err) {
          return res
            .status(400)
            .json({ responseCode: 500, responseMessage: err.message })
        }
        //if the hashes match
        if (isMatch) {
          const userJson = user.toJSON()

          const accessToken = jwtSignUser(userJson)
          const refreshToken = randtoken.uid(256)
          refreshTokens[refreshToken] = user
          accessToken.refreshToken = refreshToken
          return res.status(200).json(accessToken)
        }
        //no match
        return res
          .status(400)
          .json({ responseCode: 500, responseMessage: "Wrong credentials" })
      })
    } catch (err) {
      res.status(500).json({ responseCode: 500, responseMessage: err.message })
    }
  },
  async token(req, res) {
    const { email, password, refreshToken } = req.body
    try {
      const user = await User.findOne({ email: email })
      if (!user) {
        return res.status(401).json({
          responseCode: 401
        })
      }
      user.comparePassword(password, function(err, isMatch) {
        if (err) {
          return res.status(401).json({ responseCode: 401 })
        }
        //if the hashes match
        if (isMatch) {
          if (
            refreshToken in refreshTokens &&
            refreshTokens[refreshToken] == user
          ) {
            const accessToken = jwtSignUser(user)
            res.status(200).json(accessToken)
          } else {
            res.status(404).json({
              responseCode: 404,
              responseMessage: "Token does not exist"
            })
          }
        } else {
          res
            .status(401)
            .json({ responseCode: 401, responseMessage: "Unauthorized" })
        }
      })
    } catch (err) {
      res.status(500).json({ responseCode: 500, responseMessage: err.message })
    }
  },
  rejectToken(req, res) {
    const { refreshToken } = req.body
    if (refreshToken in refreshTokens) {
      delete refreshTokens[refreshToken]
    }
    res.status(204).json(204)
  },
  async allTokens(req, res) {
    const { email, password } = req.body
    try {
      let user = await User.findOne({ email: email })
      if (!user) {
        return res.status(401).json({
          responseCode: 401
        })
      }
      user.comparePassword(password, function(err, isMatch) {
        if (err) {
          return res.status(401).json({ responseCode: 401 })
        }
        //if the hashes match
        if (isMatch) {
          if (refreshTokens) {
            return res.status(200).json(refreshTokens)
          }
          return res.status(200).json(null)
        }
        return res.status(401).json(401)
      })
    } catch (err) {
      console.log(err)
      res.status(500).json({ responseCode: 500, responseMessage: err.message })
    }
  }
}
