var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var port = 3000;
var cors = require("cors");

require("./app_api/models/db");
require("dotenv").config();

var indexRouter = require("./app_server/routes/index");
var usersRouter = require("./app_server/routes/users");
var travelRouter = require("./app_server/routes/travel");
var apiRouter = require("./app_api/routes/index"); // API router

var handlebars = require("hbs");

var app = express();

app.set("views", path.join(__dirname, "app_server", "views"));

handlebars.registerPartials(__dirname + "/app_server/views/partials");

app.set("view engine", "hbs");

//Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  );

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }

  next();
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/travel", travelRouter);
app.use("/api", apiRouter); // Mount the API routes under the '/api' base path

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});
console.log("Before app.listen");

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

console.log("After app.listen");

module.exports = app;
