const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doodleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Doodle', doodleSchema);