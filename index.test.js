const request = require('supertest');
const app = require('./functions'); // Import the Express app from functions/index.js

describe('GET /', () => {
  it('should return Hello World', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello World');
  });
});
