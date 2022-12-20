const express = require("express");
const app = express.Router();
const { postData } = require("../controllers/reservation.controller");

app
  .post('/reservation', postData)

module.exports = app;
