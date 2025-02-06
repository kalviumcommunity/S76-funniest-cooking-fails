const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const connectDatabase = require("./database.js");

connectDatabase();

app.get("/", function (req, res) {
  res.send("Backend server is live!");
});

app.get("/ping", function (req, res) {
  res.send("pong");
});

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, function () {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;