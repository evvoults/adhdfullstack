const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema({
  document_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Document', required: true },
  section_title: { type: String },
  section_text: { type: String, required: true },
  order: { type: Number }
}, { timestamps: true });

module.exports = mongoose.model('sections', SectionSchema);
