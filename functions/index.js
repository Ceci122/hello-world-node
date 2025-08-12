const { setGlobalOptions } = require("firebase-functions");
const { onRequest } = require("firebase-functions/https");
const express = require("express");

// Optional: control max instances (for cost control)
setGlobalOptions({ maxInstances: 10 });

// Create Express app
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World from Firebase Functions!");
});

// Add more routes if you want
app.get("/about", (req, res) => {
  res.json({ message: "This is the about page" });
});

// Export your Express app as a Firebase Function named 'api'
exports.api = onRequest(app);
