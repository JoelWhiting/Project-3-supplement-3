const request = require('supertest');
const app = require('../index'); // Import the server file

describe('GET /', () => {
    it('responds with "hello world"', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('hello world');
    });
});
