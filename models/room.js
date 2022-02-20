const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  max: {
    type: String,
    required: true,
  },
  bed: {
    type: String,
    required: true,
  },
  view: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },
  image: {
    type: String,
  },
  images: {
    type: Array,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: String,
  },
});

module.exports = mongoose.model("roomStyles", RoomSchema);
