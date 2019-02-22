import Match from "../models/MatchModel"

export default {
  //==============================================================
  // Total Match Count In A Specific League
  //==============================================================
  async getMatchCount(req, res) {
    try {
      const { league } = req.params
      let count = await Match.aggregate([
        { $match: { league: league } },
        { $unwind: "$matchInstances" },
        {
          $group: {
            _id: "",
            count: { $sum: 1 }
          }
        }
      ])
      count = count[0]
      res.status(200).json(count)
    } catch (error) {
      res.status(500).json({
        message: "Error when getting match count"
      })
    }
  },
  //===============================================================
  // Premier League
  //===============================================================
  async allPremierLeagueMatches(req, res) {
    try {
      const matches = await Match.find({ league: "Premier League" })
      res.status(200).json(matches)
    } catch (error) {
      res.status(500).json({
        message: "Error when getting matches"
      })
    }
  },
  async getPremierLeagueMatch(req, res) {
    try {
      const { pseudoKey } = req.params
      const league = "Premier League"
      let match = await Match.findOne({ pseudoKey: pseudoKey, league: league })
      if (match) {
        match = match.matchInstances
        return res.status(200).json(match)
      }
      res.status(404).json({ error: "No such match" })
    } catch (error) {
      res.status(500).json({
        message: "Error when getting match"
      })
    }
  },
  //==========================================================
  // EFL Cup
  //==========================================================
  async allEFLCupMatches(req, res) {
    try {
      const matches = await Match.find({ league: "League Cup" })
      res.status(200).json(matches)
    } catch (error) {
      res.status(500).json({
        message: "Error when getting matches"
      })
    }
  },
  async getEFLCupMatch(req, res) {
    try {
      const { pseudoKey } = req.params
      const league = "League Cup"
      let match = await Match.findOne({ pseudoKey: pseudoKey, league: league })
      if (match) {
        match = match.matchInstances
        return res.status(200).json(match)
      }
      res.status(404).json({ error: "No such match" })
    } catch (error) {
      res.status(500).json({
        message: "Error when getting match"
      })
    }
  },
  //==========================================================
  // Ligue 1
  //==========================================================
  async allLigue1Matches(req, res) {
    try {
      const matches = await Match.find({ league: "Ligue 1" })
      res.status(200).json(matches)
    } catch (error) {
      res.status(500).json({
        message: "Error when getting matches"
      })
    }
  },
  async getLigue1Match(req, res) {
    try {
      const { pseudoKey } = req.params
      const league = "Ligue 1"
      let match = await Match.findOne({ pseudoKey: pseudoKey, league: league })
      if (match) {
        match = match.matchInstances
        return res.status(200).json(match)
      }

      res.status(404).json({ error: "No such match" })
    } catch (error) {
      res.status(500).json({
        message: "Error when getting match"
      })
    }
  },
  //===============================================
  //SERIE A
  //===============================================
  async allSerieAMatches(req, res) {
    try {
      const matches = await Match.find({ league: "Serie A" })
      res.status(200).json(matches)
    } catch (error) {
      res.status(500).json({
        message: "Error when getting matches"
      })
    }
  },
  async getSerieAMatch(req, res) {
    try {
      const { pseudoKey } = req.params
      const league = "Serie A"
      let match = await Match.findOne({ pseudoKey: pseudoKey, league: league })
      if (match) {
        match = match.matchInstances
        return res.status(200).json(match)
      }

      res.status(404).json({ error: "No such match" })
    } catch (error) {
      res.status(500).json({
        message: "Error when getting match"
      })
    }
  },
  //===============================================
  //  BUNDESLIGA
  //===============================================
  async allBundesligaMatches(req, res) {
    try {
      const matches = await Match.find({ league: "Bundesliga" })
      res.status(200).json(matches)
    } catch (error) {
      res.status(500).json({
        message: "Error when getting matches"
      })
    }
  },
  async getBundesligaMatch(req, res) {
    try {
      const { pseudoKey } = req.params
      const league = "Bundesliga"
      let match = await Match.findOne({ pseudoKey: pseudoKey, league: league })
      if (match) {
        match = match.matchInstances
        return res.status(200).json(match)
      }
      res.status(404).json({ error: "No such match" })
    } catch (error) {
      res.status(500).json({
        message: "Error when getting match"
      })
    }
  },
  //=================================================
  // LA LIGA
  //=================================================
  async allLaLigaMatches(req, res) {
    try {
      const matches = await Match.find({ league: "La Liga" })
      res.status(200).json(matches)
    } catch (error) {
      res.status(500).json({
        message: "Error when getting matches"
      })
    }
  },
  async getLaLigaMatch(req, res) {
    try {
      const { pseudoKey } = req.params
      const league = "La Liga"
      let match = await Match.findOne({ pseudoKey: pseudoKey, league: league })
      if (match) {
        match = match.matchInstances
        return res.status(200).json(match)
      }
      res.status(404).json({ error: "No such match" })
    } catch (error) {
      res.status(500).json({
        message: "Error when getting match"
      })
    }
  },
  //=====================================================
  // Champions League
  //=====================================================
  async allChampionsMatches(req, res) {
    try {
      const matches = await Match.find({ league: "Champions" })
      res.status(200).json(matches)
    } catch (error) {
      res.status(500).json({
        message: "Error when getting matches"
      })
    }
  },
  async getChampionMatch(req, res) {
    try {
      const { pseudoKey } = req.params
      const league = "Champions"
      let match = await Match.findOne({ pseudoKey: pseudoKey, league: league })
      if (match) {
        match = match.matchInstances
        return res.status(200).json(match)
      }
      res.status(404).json({ error: "No such match" })
    } catch (error) {
      res.status(500).json({
        message: "Error when getting match"
      })
    }
  },
  //=========================================================
  // Europa League
  //=========================================================
  async allEuropaMatches(req, res) {
    try {
      const matches = await Match.find({ league: "Europa" })
      res.status(200).json(matches)
    } catch (error) {
      res.status(500).json({
        message: "Error when getting matches"
      })
    }
  },
  async getEuropaMatch(req, res) {
    try {
      const { pseudoKey } = req.params
      const league = "Europa"
      let match = await Match.findOne({ pseudoKey: pseudoKey, league: league })
      if (match) {
        match = match.matchInstances
        return res.status(200).json(match)
      }
      res.status(404).json({ error: "No such match" })
    } catch (error) {
      res.status(500).json({
        message: "Error when getting match"
      })
    }
  }
}
