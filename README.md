# 📚 Student Registration & Flashcard API

A backend project built using **Node.js, Express, and Multer** that allows:

* Student registration with file uploads
* Flashcard creation and retrieval

---

## 🚀 Features

### 👨‍🎓 Student Module

* Register students
* Upload files (documents/images) using Multer
* Fetch all registered students

### 🧠 Flashcard Module

* Create flashcards (question & answer)
* Retrieve all flashcards

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* Multer (File Upload)
* CORS

---

## 📁 Project Structure

```
student-flashcard-system/
│── server.js
│── package.json
│── README.md
│
├── config/
│   └── multer.js
│
├── models/
│   ├── studentModel.js
│   └── flashcardModel.js
│
├── controllers/
│   ├── studentController.js
│   └── flashcardController.js
│
├── routes/
│   ├── studentRoutes.js
│   └── flashcardRoutes.js
│
├── uploads/
```

---

## ⚙️ Installation

```bash
git clone <your-repo-url>
cd student-flashcard-system
npm install
```

---

## ▶️ Run the Server

```bash
npm start
```

Server will run on:

```
http://localhost:5000
```

---

## 📡 API Endpoints

### 👨‍🎓 Student APIs

#### ➤ Register Student

```
POST /api/students/register
```

**Form Data:**

* name (string)
* email (string)
* file (upload)

---

#### ➤ Get All Students

```
GET /api/students
```

---

### 🧠 Flashcard APIs

#### ➤ Create Flashcard

```
POST /api/flashcards
```

**Body (JSON):**

```json
{
  "question": "What is Node.js?",
  "answer": "A JavaScript runtime environment"
}
```

---

#### ➤ Get All Flashcards

```
GET /api/flashcards
```

---

## 📦 File Upload Info

* Uploaded files are stored in:

```
/uploads
```

* Accessible via:

```
http://localhost:5000/uploads/<filename>
```

---

## 🧪 Testing

Use:

* Postman
* Thunder Client
* Curl

---


## 👨🏻‍💻 Author

Aish Maheshwari

---

## ⭐ Contribution

Feel free to fork, improve, and submit PRs!
