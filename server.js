require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("./passportjs/index");
const cookieSession = require("cookie-session");

//DATABASE
const connectDB = require("./MongoDB");
connectDB();

//INITIALIZE APP
const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(
  cookieSession({
    // maxAge: 24*60*60*1000,
    name: "session",
    keys: ["key1", "key2"],
  })
);
//passport
app.use(passport.initialize());
app.use(passport.session());

//ROUTERS ALWAYS BE BELOW MIDDLEWARE
app.use("/api/products", require("./routes/ProductRoute"));
app.use("/auth", require("./passportjs/Users"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
