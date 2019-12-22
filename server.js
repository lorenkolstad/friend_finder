// Creates the constiables to require the npm packages we've used.
const express = require("express");
const exphbs = require("express-handlebars");


// Sets up the app using express.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
// If you do app.use(express.static("public")), allows you to use specific folders for returning to the client. So in you layout, you can have css linked in your HTML page. 
app.use(express.static("public"));

const apiRoutes = require("./routing/apiRoutes.js")
const htmlRoutes = require("./routing/htmlRoutes.js")

// Sets up the app to use the handlebars engine. 
const hbs = exphbs.create({});

// Need this middleware to parse the objects/use nested objects with the extended: true piece.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up the app to use the new "engine" of hbs to setup a different layout for a route.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Sets the routes up to use the "app"/express.
apiRoutes(app)
htmlRoutes(app)

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: " + PORT);
});