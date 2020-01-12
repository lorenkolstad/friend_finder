// // Creates the constiables to require the npm packages we've used.
// let express = require("express");
// // let path = require("path");
// // const exphbs = require("express-handlebars");


// // Sets up the app using express.
// let app = express();

// // Set the port of our application
// // process.env.PORT lets the port be set by Heroku
// let PORT = process.env.PORT || 8080;

// let bodyParser = require("body-parser");

// // Create application/json parser
// let jsonParser = bodyParser.json();

// // Create application/urlencoded parser
// let urlencodedParser = bodyParser.urlencoded({ extended: false});

// // Sets up the Express app to handle data parsing
// // If you do app.use(express.static("public")), allows you to use specific folders for returning to the client. So in you layout, you can have css linked in your HTML page. 
// // app.use(express.static("public"));

// // let apiRoutes = require("./routing/apiRoutes");
// // let htmlRoutes = require("./routing/htmlRoutes");

// let apiRoutes = require("./app/routing/apiRoutes");
// let htmlRoutes = require("./app/routing/htmlRoutes");

// // Sets up the app to use the handlebars engine. 
// // const hbs = exphbs.create({});

// // Need this middleware to parse the objects/use nested objects with the extended: true piece.
// // app.use(body.urlencoded({ extended: true }));

// // Parse various different custom JSON types as JSON
// app.use(bodyParser.json({ type: 'application/*+json' }));

// // Parse some custom thing into a buffer.
// app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

// // Parse an HTML body into a string.
// app.use(bodyParser.text({ type: 'text/html' }));

// // Sets up the app to use the new "engine" of hbs to setup a different layout for a route.
// // app.engine('handlebars', hbs.engine);
// // app.set('view engine', 'handlebars');

// // Sets the routes up to use the "app"/express.
// apiRoutes(app);
// htmlRoutes(app);

// // Start our server so that it can begin listening to client requests.
// app.listen(PORT, function() {
//     // Log (server-side) when our server has started
//     console.log("Server listening on: " + PORT);
// });

const express = require("express")
const app = express()

const apiRoutes = require("./app/routing/apiRoutes")
const htmlRoutes = require("./app/routing/htmlRoutes")


// port listener
const PORT = process.env.PORT || 8080

// setting up express server
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//allows sending of additional files through the 'public folders'
app.use(express.static("./app/public"))

apiRoutes(app)
htmlRoutes(app)

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});