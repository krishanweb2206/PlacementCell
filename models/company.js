const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema(
{
    name: {
      type: String,
      unique: true,
    },

    date: {
      type: String,
      unique: true,
    },

    students: [
      {
        student: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Student",
        },

        result: {
          type: String,
          enum: ["Selected", "Not Selected", "On Hold", "Interview Pending"],
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Company = mongoose.model("Student", CompanySchema);

module.exports = Company;