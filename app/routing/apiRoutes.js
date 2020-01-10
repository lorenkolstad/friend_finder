const friends = require("../data/friends.js") 

console.log(friends)

module.exports = function(app) {
    
    app.get("/api/friends", function(req, res){
        // res.render("index", { friends: friends, layout: 'layout1'});
        console.log(friends);
        // friends.getFriends()
        // .then(friends => res.json(friends))
        // .catch(err => res.status(404).json(err));
        friends.Friends.findAll({}).then(function(foundFriends) {
            res.json(foundFriends);
        });

    });
     
     
    app.post("/api/friends", function(req, res){
        // friends.addFriend(req.body)
        // .then(friend => res.json(friend))
        // .catch(err => res.status(404).json(err));

        console.log(req.body)

        friends.Friends.create({
            name: req.body.name,
            photo: req.body.photo,
            scores: req.body.scores
        }).then(function(addFriend) {
            res.json(addFriend);
        });

    });
};