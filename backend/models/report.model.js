const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ['phone', 'email', 'url'],
      required: true
    },
    value: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    reportedBy: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true
        },
        reportedAt: {
          type: Date,
          default: Date.now
        }
      }
    ]
  }
)

const reportModel = mongoose.model("Report", reportSchema);

module.exports = reportModel;