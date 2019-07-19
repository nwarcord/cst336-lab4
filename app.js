const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

app.get("/", function(req,res){
    res.render("index.html");
});

app.get("/mercury", function(req, res){
    var facts = [
        "Mercury has no moons or rings. Its surface is rocky and cratered.",
        "Though it is the closest planet to the sun, it does not have the hottest surface temperature.",
        "It takes 88 Earth days for Mercury to complete an orbit around the Sun."
    ];
    res.render("mercury.html", {facts: facts});
});

app.get("/venus", function(req, res){
    var facts = [
        "Venus is the closest planet to Earth and is similar in size to our home planet.",
        "Spins 'backwards' compared to other planets.",
        "Roughly 900 degrees Farenheit on the surface, the hottest in our Solar System."
    ];
    res.render("venus.html", {facts: facts});
});

app.get("/earth", function(req, res){
    var facts = [
        "Only planet known to humans that has life (emphasis on known).",
        "Roughly 71% of the planet's surface is water.",
        "Earth's atmosphere is made up primarily of nitrogen (78%), oxygen(21%), and other miscellaneous substances."
    ];
    res.render("earth.html", {facts, facts});
});

app.get("/mars", function(req, res){
    var facts = [
        "Mars gets its red surface color from iron in the soil that has 'rusted' over time.",
        "The two moons of Mars are named Deimos and Phobos.",
        "There are traces of water on Mars, and the planet has seasons and a thin atmosphere."
    ];
    res.render("mars.html", {facts, facts});
});

// Server Listener
app.listen("8081", "127.0.0.1", function(){
    console.log("Express server is running...");
});