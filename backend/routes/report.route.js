const express = require("express");
const { reportPhone, reportEmail, reportURL } = require("../controllers/report.controller");

const reportRouter = express.Router();

reportRouter.post("/report/phone",reportPhone);
reportRouter.post("/report/email",reportEmail);
reportRouter.post("/report/url",reportURL);

module.exports = reportRouter;