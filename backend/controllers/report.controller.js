const reportModel = require("../models/report.model");

exports.reportPhone = async (req, res) => {
  const { phoneNumber } = req.body;

  try {
    const report = await reportModel.findOne({ type: 'phone', value: phoneNumber });

    if (report) {
      const alreadyReported = report.reportedBy.find(
        (entry) => entry.user.toString() === req.user._id.toString()
      );

      if (alreadyReported) {
        return res.status(400).json({
          success: false,
          message: "You have already reported this phone number."
        });
      }

      report.reportedBy.push({ user: req.user._id });
      await report.save();
    }
    else {
      const newReport = new reportModel({
        type: 'phone',
        value: phoneNumber,
        reportedBy: [{ user: req.user._id }]
      });

      await newReport.save();
    }

    return res.status(201).json({
      success: true,
      message: "Phone number reported successfully."
    });
  }
  catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong, please try again later.",
      error: error.message
    });
  }
}

exports.reportEmail = async (req,res) => {
  const { email } = req.body;

  try {
    const report = await reportModel.findOne({ type: 'email', value: email });

    if (report) {
      const alreadyReported = report.reportedBy.find(
        (entry) => entry.user.toString() === req.user._id.toString()
      );

      if (alreadyReported) {
        return res.status(400).json({
          success: false,
          message: "You have already reported this email."
        });
      }

      report.reportedBy.push({ user: req.user._id });
      await report.save();
    }
    else {
      const newReport = new reportModel({
        type: 'email',
        value: email,
        reportedBy: [{ user: req.user._id }]
      });

      await newReport.save();
    }

    return res.status(201).json({
      success: true,
      message: "Email reported successfully."
    });
  }
  catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong, please try again later.",
      error: error.message
    });
  }
}

exports.reportURL = async (req,res) => {
  const { url } = req.body;

  try {
    const report = await reportModel.findOne({ type: 'url', value: url });

    if (report) {
      const alreadyReported = report.reportedBy.find(
        (entry) => entry.user.toString() === req.user._id.toString()
      );

      if (alreadyReported) {
        return res.status(400).json({
          success: false,
          message: "You have already reported this url."
        });
      }

      report.reportedBy.push({ user: req.user._id });
      await report.save();
    }
    else {
      const newReport = new reportModel({
        type: 'url',
        value: url,
        reportedBy: [{ user: req.user._id }]
      });

      await newReport.save();
    }

    return res.status(201).json({
      success: true,
      message: "URL reported successfully."
    });
  }
  catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong, please try again later.",
      error: error.message
    });
  }
}