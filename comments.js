// Create web server
// Run: node comments.js
// Access: http://localhost:3000

var express = require("express");
var app = express();

// Set up template engine
app.set("view engine", "ejs");

// Set up static files directory
app.use(express.static("./public"));

// Set up routes
var commentRoutes = require("./routes/comments");
app.use(commentRoutes);

// Start web server
app.listen(3000, function() {
    console.log("Server has started!!!");
});

