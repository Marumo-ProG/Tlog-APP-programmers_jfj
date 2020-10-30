var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var router = express.Router();

// config the view engine
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

// config middlewares
app.use(express.static(path.join(__dirname,"views")));
app.use(bodyParser.urlencoded({extended:true}));

// config server
app.listen(3000,console.log("server running on port 3000"));

app.use("/",router);

router.get("/",(req,res)=>{
    res.render("index");
})

var name = "";
router.post("/logged",(req,res)=>{
    name = req.body.name;
    console.log(name);

    // after we render the log page
    res.render("log",{
        user: name,
    });
})
router.post("/locationSent",(req,res)=>{
    var coords = req.body.coords;

    console.log(coords);

    // rendering the final page
    res.render("final",{
        user: name,
        message: "location sent to server successfully",
    })
})


