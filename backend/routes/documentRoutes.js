const express = require('express');
const router = express.Router();
const Document = require('../models/document'); // Βεβαιώσου ότι είναι κεφαλαίο "D" αν το αρχείο είναι Document.js

// 🔹 POST: Δημιουργία νέου εγγράφου
router.post('/', async (req, res) => {
  try {
    const newDoc = new Document(req.body);
    const saved = await newDoc.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 GET: Όλα τα documents
router.get('/', async (req, res) => {
  try {
    const documents = await Document.find();
    res.json(documents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 GET: Ένα συγκεκριμένο document με βάση το ID
router.get('/:id', async (req, res) => {
  try {
    const doc = await Document.findById(req.params.id);
    if (!doc) return res.status(404).json({ error: 'Document not found' });
    res.json(doc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 DELETE: Διαγραφή ενός document με ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Document.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Document not found' });
    res.json({ message: 'Document deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
