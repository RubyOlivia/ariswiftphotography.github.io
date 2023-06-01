// import all dependencies
const dotenv = require("dotenv");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();

// configure ENV file and require connection file
dotenv.config({ path: "./config.env" });
require("./db/conn");
const port = process.env.PORT;

// Require Model
const Users = require("./models/userSchema");

// Get data and cookies from front end
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Registration
app.post("/register", (req, res) => {
  try {
    // Get body or Data
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const user = new Users({
      username: username,
      email: email,
      password: password,
    });

    const created = createUser.save();
    console.log(created);
    res.status(200).send("Registration Successful");
    
  } catch (error) {
    res.status(400).send(error);
  }
});

// Login User
app.post("/login", async (req, res) => {
  try {
    // Get body or Data
    const email = req.body.email;
    const password = req.body.password;
    // find user
    const user = await Users.findOne({ email: email });
    if(user){
      // compare password
      const isMatch = await bcrypt.compare(password, user.password);

      if(isMatch){
        // generate token
        const token = await user.generateToken();
        res.cookie("jwt", token, {
          expires: new Date(Date.now() + 30000),
          httpOnly: true,
        });

        res.status(200).send("Login Successful");
      }else{
        res.status(400).send("Invalid Credentials");
      }
    }else{
      res.status(400).send("Invalid Credentials");
    }

  } catch (error) {
    res.status(400).send(error);
  }
});


// Run Server
app.listen(port, () => {
  console.log("Server is listening");
});




// Connect front end with back end
