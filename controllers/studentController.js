const { students } = require("../models/studentModel");

exports.registerStudent = (req, res) => {
  const { name, email } = req.body;
  const file = req.file;

  const student = {
    id: Date.now(),
    name,
    email,
    file: file ? file.filename : null
  };

  students.push(student);
  res.json({ message: "Student Registered", student });
};

exports.getStudents = (req, res) => res.json(students);
