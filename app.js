const express = require("express");
const app = express();
const routes = require("./routes");

app.set("view engine", "pug");

app.use(express.static("public"));
app.use(routes);

// creates error for non-existent routes and triggers error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  res.locals.error = err;
  console.log(`Oops! There has been a ${err.status}, ${err.message} error`)
  res.render("error");
});

app.listen(3000, () => {
  console.log("The application is running on localhost:3000!")
});
