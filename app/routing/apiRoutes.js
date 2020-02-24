const friends = require("../data/friends.js")

console.log(friends)

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        let user = req.body;

        console.log(user);

        for (let i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }

        let bestFriendScoreDifference = 20;

        for (let x = 0; x < friends.length; x++) {
            let totalDifference = 0;
            let newBestFriend = 0;

            for (let a = 0; a < friends[x].scores.length; a++) {
                let difference = Math.abs(user.scores[a] - friends[x].scores[a]);

                totalDifference += difference;
            }

            if (totalDifference < bestFriendScoreDifference) {
                newBestFriend = x;
                bestFriendScoreDifference = totalDifference;
            }
        }

        friends.push(user);

        res.json(friends[newBestFriend]);

    });
};


//             .then(friend => res.json(friend))
//             .catch(err => res.status(404).json(err));

//         console.log(req.body)

//         friends.Friends.create({
//             name: req.body.name,
//             photo: req.body.photo,
//             scores: req.body.scores
//         }).then(function (addFriend) {
//             res.json(addFriend);
//         });
//     });

// };