const mongoose = require('mongoose');

const PromptSchema = new mongoose.Schema({
  prompt_type: { type: String, required: true },
  prompt_text: { type: String, required: true },
  input_text: { type: String, required: true },
  document_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Document' },
  section_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Section' },
  model_used: { type: String, default: 'gpt-4' },
  response: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('prompt', PromptSchema);
