const friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("api/friends", function(req, res) {
        const difference = 0;
        const match = {
            name: "",
            photo: "",
            matchDifference: 1000
        };
    });

    const userData = req.body;
    const userName = userData.name;
    const userScore = userData.score;

    const parser = userScore.map(function(item) {
        return parseInt(item, 10);
    });

    userData = {
        name: req.body.name,
        photo: req.body.photo,
        score: parser
    }

    const userSum = parser.reduce((a, b) => a + b, 0);

    for(const i = 0; i < friends.length; i++) {
        difference = 0;

        const matchSum = friends[i].scores.reduce((a, b) => a + b, 0);
        difference += Math.abs(sum - matchSum);

        if(difference <= match.matchDifference) {
            match.name = friends[i].name;
            match.photo = friends[i].photo;
            match.difference = matchDifference;
        }
    }

    friends.push(userData);
    res.json(match);
}