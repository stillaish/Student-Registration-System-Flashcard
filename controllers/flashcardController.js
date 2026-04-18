const { flashcards } = require("../models/flashcardModel");

exports.createFlashcard = (req, res) => {
  const { question, answer } = req.body;

  const card = {
    id: Date.now(),
    question,
    answer
  };

  flashcards.push(card);
  res.json({ message: "Flashcard Created", card });
};

exports.getFlashcards = (req, res) => res.json(flashcards);
