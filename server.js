const express = require("express");
const cors = require("cors");

const studentRoutes = require("./routes/studentRoutes");
const flashcardRoutes = require("./routes/flashcardRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/students", studentRoutes);
app.use("/api/flashcards", flashcardRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
