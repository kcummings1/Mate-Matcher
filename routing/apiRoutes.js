var friendData = require("../data/friends.js");
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;

        for (var i = 0; i < newFriend.scores.length; i++) {
            if (newFriend.scores[i] === "1 (I Do not like that at all!!)") {
                newFriend.scores[i] = 1;

            } else if (newFriend.scores[i] === "5 (I do like that A lot!!)") {
                newFriend.scores[i] = 5;
            } else {
                newFriend.scores[i] = parseInt(newFriend.scores[i]);
            }
        };
        var diffArray = [];
        for (var i = 0; i < friendData.length; i++) {
            var compFriend = friendData[i];
            var totDifference = 0;
            for (var k = 0; k < compFriend.scores.length; k++) {
                var differenceOnScore = Math.abs(compFriend.scores[k] - newFriend.scores[k]);
                totDifference += differenceOnScore;
            };
            diffArray[i] = totDifference;
        };
        var bfNum = diffArray[0];
        var bfIndex = 0;
        for (var i = 0; i < diffArray.length; i++) {
            if(diffArray[i] < bfNum) {
                bfn = diffArray[i];
                bfIndex = i;
            }
        };
        friendData.push(newFriend);
        res.json(friendData[bfIndex]);
    });

};

