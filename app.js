/* Main application file for the Travlr Getaways website. This file sets up the Express server, configures middleware, and defines routes for handling requests. */

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var express = require("express");
var path = require("path"); // Import the path module for handling file paths
var app = express();
var port = 3000;

/* Import routes */
var indexRouter = require("./app_server/routes/index");
var usersRouter = require("./app_server/routes/users");
var travelRouter = require("./app_server/routes/travel");
var handlebars = require("hbs"); // Import express-handlebars for templating

app.set("views", path.join(__dirname, "app_server", "views")); // Set the views directory
app.set("view engine", "ejs"); // Set EJS as the view engine

handlebars.registerPartials(
  path.join(__dirname, "app_server", "views", "partials"),
); // Register Handlebars partials
app.set("view engine", "hbs"); // Set Handlebars as the view engine

/* Use routes */
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/travel", travelRouter);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/travel", travelRouter); // Use the travel router for /travel routes
app.use("/users", usersRouter); // Use the users router for /users routes
app.use("/", indexRouter); // Use the index router for the root route

/* Catch 404 and forward to error handler */
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  // Set locals, only providing error in development
  next.locals.message = err.message;
  next.locals.error = req.app.get("env") === "development" ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
