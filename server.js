const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const nodemailer = require("nodemailer");
const compression = require("compression");

const app = express();
const port = process.env.PORT || 5000;

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(port);

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.join(__dirname, "client/build", "index.html"))
  );
}

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd"
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) res.status(500).send({ error: stripeErr });
    res.status(200).send({ success: stripeRes });
  });
});

app.post("/contact", (req, res) => {
  const { email, name, message, subject } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  let info = {
    from: `${name} <${email}>`,
    to: process.env.EMAIL,
    subject,
    text: `${email} ${message}`
  };

  transporter.sendMail(info, (error, info) => {
    if (error) res.send("Error occurred, please try again later.");
    res.send("Message sent!");
  });
});
