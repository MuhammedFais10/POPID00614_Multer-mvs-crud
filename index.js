const express = require("express");
const path = require("path");
const router = require("./router/userRouter");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", router);
app.listen(5000, (req, res) => {
  console.log("server connected");
});
