const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

// Middleware setup
app.use(cors());
app.use(express.json());

// Simple route for the root
app.get("/", (req, res) => {
  res.send("Welcome to the API server!");
});

// Simulate a simple database (array)
let users = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
];

// POST: Create a new user
app.post("/users", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required" });
  }

  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json({ message: "User created", data: newUser });
});

// GET: Get all users
app.get("/users", (req, res) => {
  res.json({ data: users });
});

// Other routes...

// Start the server
app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
