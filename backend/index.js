require("dotenv").config();
const express = require("express");
const dbConnect = require("./config/dbConnect");
const reportRouter = require("./routes/report.route");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnect();

app.use(reportRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));