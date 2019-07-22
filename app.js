const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

var pages = [
    {"url": "/", "name": "Home"},
    {"url": "/mercury", "name": "Mercury"},
    {"url": "/venus", "name": "Venus"},
    {"url": "/earth", "name": "Earth"},
    {"url": "/mars", "name": "Mars"}
];

app.get("/", function(req,res){
    res.render("index.html", {pages: pages, current: "/"});
});

app.get("/mercury", function(req, res){
    var facts = [
        "Mercury has no moons or rings. Its surface is rocky and cratered from what is thought to be have been a bombardment of comets and asteroids billions of years ago.",
        "Though it is the closest planet to the sun, it does not have the hottest surface temperature.",
        "It takes 88 Earth days for Mercury to complete an orbit around the Sun."
    ];
    res.render("mercury.html", {facts: facts, pages: pages, current: "/mercury"});
});

app.get("/venus", function(req, res){
    var facts = [
        "Venus is the closest planet to Earth and is similar in size to our home planet.",
        "Spins 'backwards' compared to other planets; Sun sets in the east and rises in the west on its surface.",
        "Roughly 900 degrees Farenheit on the surface, the hottest in our Solar System.",
        "Other than our Moon, Venus is the brightest natural body in the night sky."
    ];
    res.render("venus.html", {facts: facts, pages: pages, current: "/venus"});
});

app.get("/earth", function(req, res){
    var facts = [
        "Only planet known to humans that has life (emphasis on known).",
        "Roughly 71% of the planet's surface is water.",
        "Earth's atmosphere is made up primarily of nitrogen (78%), oxygen(21%), and other miscellaneous substances.",
        "About 4.5 billion years old, the Earth is believed to have taken 10-20 million years to fully form."
    ];
    res.render("earth.html", {facts: facts, pages: pages, current: "/earth"});
});

app.get("/mars", function(req, res){
    var facts = [
        "Mars gets its red surface color from iron in the soil that has 'rusted' over time.",
        "The two moons of Mars are named Deimos and Phobos.",
        "There are traces of water on Mars, and the planet has seasons along with a thin atmosphere.",
        "The dust stroms on Mars are the largest in our Solar System, with some spanning the entire planet and producing winds that reach 100 mph."
    ];
    res.render("mars.html", {facts: facts, pages: pages, current: "/mars"});
});

// Server Listener
app.listen("8081", "127.0.0.1", function(){
    console.log("Express server is running...");
});