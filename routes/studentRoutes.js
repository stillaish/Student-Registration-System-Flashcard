const express = require("express");
const router = express.Router();
const upload = require("../config/multer");

const { registerStudent, getStudents } = require("../controllers/studentController");

router.post("/register", upload.single("file"), registerStudent);
router.get("/", getStudents);

module.exports = router;
