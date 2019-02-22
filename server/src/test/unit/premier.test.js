import mongoose from "mongoose"
import Match from "../../models/MatchModel"

//Describe our tests
describe("premier league suite", function() {
  beforeAll(async () => {
    await mongoose.connect(
      "mongodb://localhost:27017/testing",
      { useNewUrlParser: true }
    )
  })

  beforeEach(async () => {
    await mongoose.connection.collections.matches.drop()
  })

  test("Creates a premier league match with sub-documents", async () => {
    let match = new Match({
      pseudoKey: "bournemouth-cardiff",
      sport: "Soccer",
      league: "Premier League",
      date: "2018-08-11T14:00:00.000Z",
      team1: "Bournemouth",
      team2: "Cardiff",
      matchInstances: [
        {
          team1: {
            name: "Bournemouth",
            price: "2.02"
          },
          team2: {
            name: "Cardiff",
            price: "3.82"
          },
          pseudoKey: "bournemouth-cardiff",
          service: "Betway",
          region: "Kenya",
          drawPrice: "3.43",
          url:
            "https://www.betway.co.ke/Bet/EventMultiMarket?eventId=18105455-c36f-e811-80dc-00155d4cf15f&marketTypeCategoryId=00000000-0000-0000-da7a-000000580001"
        }
      ]
    })

    await match.save()
    match = await Match.findOne({ pseudoKey: "bournemouth-cardiff" })
    expect(match.matchInstances.length).toBe(1)
  })
})
