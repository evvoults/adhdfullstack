const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  uploaded_by: { type: String },
  upload_date: { type: Date, default: Date.now },
  text_content: { type: String, required: true },
  original_format: { type: String, enum: ['pdf', 'doc'], required: true }
}, { timestamps: true });

module.exports = mongoose.model('documents', DocumentSchema);
