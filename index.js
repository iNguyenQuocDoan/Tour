const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const clientRoutes = require("./routes/client/index.route");
require("dotenv").config();

const app = express();
const port = 3000;

mongoose.connect(process.env.DB_CONNECTION_STRING);

// Thiết lập view chứa giao diện
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Thiết lập thư mục chứa file tĩnh
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", clientRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
