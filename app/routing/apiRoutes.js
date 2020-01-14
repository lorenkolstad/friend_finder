const friends = require("../data/friends.js") 

console.log(friends)

module.exports = function(app) {
    
    app.get("/api/friends", function(req, res){
        res.json(friends);
    });

    // app.post("/api/friends", function(req, res){
    //     console.log(req.body);
    //     .then(friend => res.json(friend))
    //     .catch(err => res.status(404).json(err));

    //     console.log(req.body)

    //     friends.Friends.create({
    //         name: req.body.name,
    //         photo: req.body.photo,
    //         scores: req.body.scores
    //     }).then(function(addFriend) {
    //         res.json(addFriend);
    //     });

};