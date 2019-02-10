const express = require("express");
const app = express();
const data = require("./data.json");
const projects = data.projects;

app.set("view engine", "pug");

app.use(express.static("public"));

// GET root route
app.get("/", (req, res) => {
  res.render("index", { projects });
});

// GET about route
app.get("/about", (req, res) => {
  res.render("about");
});

// GET about route
app.get("/project:id", (req, res) => {
  const id = req.params.id
  res.render("project", { projects, id });
});

// creates error for non-existant routes and triggers error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  res.locals.error = err;
  res.render("error");
});

app.listen(3000, () => {
  console.log("The application is running on localhost:3000!")
});
