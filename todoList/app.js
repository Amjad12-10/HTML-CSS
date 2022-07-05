const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));
var items =[];
app.get("/", (req, res) => {
var today = new Date();
var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
}
var day = today.toLocaleDateString("en-US", options);
res.render("index", {DayName: day , ListAdds: items});
})

app.post("/", (req, res) => {
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
})



app.listen(3000, () => {
    console.log("Server started on port 3000");    
})