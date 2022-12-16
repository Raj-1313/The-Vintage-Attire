const Auth_Sign = require("../models/Auth.model");
const express = require("express");
const jwt = require("jsonwebtoken");
const App = express.Router();



App.post("/signup", async (req, res) => {
  const { email, password, name, country, mobile } = req.body;
  try {
    const userEmail = await Auth_Sign.findOne({ email });
    if (userEmail) {
      return res.send("User already exists");
    } else {
      const User = await Auth_Sign.create({
        email,
        password,
        name,
        country,
        mobile,
      });
      // let decode = jwt.decode(token, process.env.key);
      return res.status(201).send({ redirect: true });
    }
  } catch (e) {
    return res.send("404 error Url is not working");
  }
});

App.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const User = await Auth_Sign.findOne({ email, password }).select({
      password: 0,
    });
    if (User) {
      let token = jwt.sign(
        {
          email: User.email,
          name: User.name,
          country: User.country,
          mobile: User.mobile,
          category: User.category,
        },
        process.env.key,
        {
          expiresIn: "10 day",
        }
      );
      return res.status(201).send({ token, User });
    }
    return res.status(401).send("Signup Please");
  } catch (e) {
    return res.status(400).send("404 error");
  }
});

module.exports = App;
