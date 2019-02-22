import express from "express"
import AuthController from "../controllers/AuthController"

const router = express.Router()

router.post("/token", AuthController.token)
router.post("/token/reject", AuthController.rejectToken)
router.post("/token/all", AuthController.allTokens)
router.post("/signup", AuthController.register)
/**
 * @api {post} /api/v1/auth/signin Generate a token
 * @apiVersion 1.0.0
 * @apiName Login
 * @apiGroup Auth
 * @apiPermission public
 * @apiDescription In order to generate a token, you will need to already have a user in the database.
 *
 * @apiParam (Request body) {String} username The username
 * @apiParam (Request body) {String} password The password
 *
 * @apiExample {js} Javascript:
 * const data = {
 *   "username": "test@email.com",
 *   "password": "yourpassword"
 * };
 *
 * $http.post(url, data)
 *   .success((res) => doSomethingHere())
 *   .error((err) => doSomethingHere());
 *
 * @apiSuccess {String} accessToken The token that must be used to access the other endpoints
 * @apiSuccess {String} expiresIn The expiration duration(seconds)
 * @apiSuccess {String} refrehToken This is used to generate new access token upon its expiry
 *
 * @apiSuccessExample {json} Success response:
 *     HTTPS 200 OK
 *     {
 *      "accessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9 ... and the rest of the token here",
 *       "expiresIn": 360,
 *       "refreshToken": "xn1VuOhBtaNqSDeXS77ZYfvlgZVYw4IBxmNh ... and the rest of the token here"
 *    }
 */
router.post("/signin", AuthController.login)
router.get("*", function(req, res) {
  res.send("what???", 404)
})
export default router
