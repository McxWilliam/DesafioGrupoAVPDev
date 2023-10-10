const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  nome: String,
  email: String,
  linkedIn: String,
  github: String,
  twitter: String,
});

module.exports = mongoose.model('Contact', contactSchema);
