const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Thiết lập view chứa giao diện

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("client/pages/home", {
    pageTitle: "Home Page 1",
  });
});

app.get("/tour-lists", (req, res) => {
  res.render("client/pages/tourLists", {
    pageTitle: "Tour Lists 1",
  });
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
