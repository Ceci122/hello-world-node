const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

// Export Express app for testing
module.exports = app;

// Export Firebase function (make sure the name matches your firebase.json rewrites)
exports.api = functions.https.onRequest(app);
