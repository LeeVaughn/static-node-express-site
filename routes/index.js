const express = require("express");
const router = express.Router();
const data = require("../data.json");
const projects = data.projects;

// GET root route
router.get("/", (req, res) => {
  res.render("index", { projects });
});

// GET about route
router.get("/about", (req, res) => {
  res.render("about");
});

// GET about route
router.get("/project:id", (req, res) => {
  const id = req.params.id
  res.render("project", { projects, id });
});

module.exports = router;
