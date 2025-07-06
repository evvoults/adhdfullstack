const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  section_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Section', required: true },
  question_text: { type: String, required: true },
  answer_text: { type: String, required: true },
  type: { type: String, enum: ['open', 'multiple-choice'], default: 'open' },
  difficulty: { type: String, enum: ['easy', 'medium', 'hard'], default: 'medium' }
}, { timestamps: true });

module.exports = mongoose.model('questions', QuestionSchema);
