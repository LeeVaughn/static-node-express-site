const express = require("express");
const app = express();

// creates root route
app.get("/", (req, res) => {
  res.send("test");
});

app.listen(3000, () => {
  console.log("The application is running on localhost:3000!")
});
