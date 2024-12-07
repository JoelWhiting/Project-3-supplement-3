const request = require('supertest');
const app = require('../index'); // Import the server file

/**
 * @fileoverview This file contains unit tests for the Express server.
 * @module tests/serverTests
 */

describe('GET /', () => {
    /**
     * Unit test for the GET / endpoint.
     * @function
     * @name GET_root_test
     * @description Ensures the root endpoint responds with "hello world" and status 200.
     * @returns {Promise<void>} Resolves if the test passes.
     */
    it('responds with "hello world"', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('hello world');
    });
});
