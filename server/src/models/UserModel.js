import mongoose from "mongoose"
import bcrypt from "bcrypt"

const SALT_WORK_FACTOR = 10

const Schema = mongoose.Schema

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

UserSchema.pre("save", function(next) {
  let user = this

  //only hash the password if it has been modified(or is new)
  if (!user.isModified("password")) return next()

  //generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err)

    //hash the password along with our new salt
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err)
      //Override the cleartext password with
      //the hashed one
      user.password = hash
      next()
    })
  })
})

UserSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return callback(err, isMatch)
    callback(null, isMatch)
  })
}
export default mongoose.model("user", UserSchema)
