var mongoose = require("mongoose");

//schema
var userSchema = mongoose.Schema({
  created_at: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required: true,
  },
  matches: {
    type: Number,
    required: true,
  },
  innings: {
    type: Number,
    required: true,
  },
  runs: {
    type: Number,
    required: true,
  },
  ballsFaced: {
    type: Number,
    required: true,
  },
  battingStrikeRate: {
    type: Number,
    required: true,
  },
  hundredsScored: {
    type: Number,
    required: true,
  },
  fiftiesScored: {
    type: Number,
    required: true,
  },
  boundaryFours: {
    type: Number,
    required: true,
  },
  boundarySixes: {
    type: Number,
    required: true,
  },
});

const Users = mongoose.model("user schema", userSchema);
module.exports = Users;
