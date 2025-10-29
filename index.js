const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = 3000;

mongoose.connect(
  process.env.DB_CONNECTION_STRING
);

const Tour = mongoose.model("Tour", {
  name: String,
  vehicle: String
}, "tours");

// Thiết lập view chứa giao diện

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Thiết lập thư mục chứa file tĩnh
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("client/pages/home", {
    pageTitle: "Home Page 1",
  });
});

app.get("/tour-lists", async (req, res) => {
  const tourList = await Tour.find({});

  console.log(tourList);

  res.render("client/pages/tourLists", {
    pageTitle: "Tour Lists 1",
    tourList: tourList
  });
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
