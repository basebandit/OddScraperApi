import mongoose from "mongoose"

const Schema = mongoose.Schema
const MatchInstanceSchema = new Schema({
  _id: false,
  pseudoKey: { type: String, required: true, unique: true },
  service: { type: String, required: true },
  region: { type: String, required: true },
  team1: {
    name: { type: String, required: true },
    price: { type: String, required: true }
  },
  team2: {
    name: { type: String, required: true },
    price: { type: String, required: true }
  },
  drawPrice: { type: String, required: true },
  url: { type: String, required: true }
})

const MatchSchema = new Schema({
  pseudoKey: { type: String, required: true, unique: true },
  sport: { type: String, required: true },
  league: { type: String, required: true },
  date: { type: Date, required: true },
  team1: { type: String, required: true },
  team2: { type: String, required: true },
  matchInstances: [MatchInstanceSchema]
})

export default mongoose.model("Match", MatchSchema)
