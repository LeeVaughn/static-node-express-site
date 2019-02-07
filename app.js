const express = require("express");
const app = express();

// creates root route
app.get("/", (req, res) => {
  res.send("test");
});

app.listen(3000);
