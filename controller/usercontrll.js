const User = require("../model/userModel");

const renderHome = (req, res) => {
  User.find().then((users) => {
    res.render("user", { users: users });
  });
};

const addName = (req, res) => {
  newUser = new User({
    name: req.body.name,
    file: req.file.filename,
  });

  newUser.save().then((result) => {
    res.redirect("/");
  });
};

module.exports = { renderHome, addName };
