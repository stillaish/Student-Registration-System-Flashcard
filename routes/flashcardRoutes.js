const express = require("express");
const router = express.Router();

const { createFlashcard, getFlashcards } = require("../controllers/flashcardController");

router.post("/", createFlashcard);
router.get("/", getFlashcards);

module.exports = router;
