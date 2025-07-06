const express = require('express');
const router = express.Router();
const Document = require('../models/document'); // το schema που ήδη έχεις


// POST /api/documents
router.post('/', async (req, res) => {
  try {
    const newDoc = new Document(req.body);
    const saved = await newDoc.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;