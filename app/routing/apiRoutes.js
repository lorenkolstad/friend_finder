const friends = require("data/friends") 

console.log(friends)

module.exports = function(app) {
    
    app.get("/api/friends", function(req, res){
        // res.render("index", { friends: friends, layout: 'layout1'});
        // console.log(friends);
      
        res.json(friends)
    });
     
     
    app.post("/api/friends", function(req, res){

        console.log(req.body)

    });
};