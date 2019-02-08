const express = require("express");
const app = express();
const data = require("./data.json");
const projects = data.projects;

app.set("view engine", "pug");

// GET root route
app.get("/", (req, res) => {
  res.render("layout", projects);
});

// GET about route
app.get("/about", (req, res) => {
  res.render("about", projects);
});

// GET about route
app.get("/project:id", (req, res) => {
  res.render("about", projects);
});

app.listen(3000, () => {
  console.log("The application is running on localhost:3000!")
});
