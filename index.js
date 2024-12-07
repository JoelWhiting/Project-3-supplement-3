const express = require('express');
const app = express();
const port = 3000;

/**
 * @fileoverview This file sets up a simple Express server.
 * @module server
 */

/**
 * Root GET endpoint.
 * @name GET /
 * @function
 * @description Responds with "hello world".
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {void} Sends "hello world" to the client.
 */
app.get('/', (req, res) => {
    res.send('hello world');
});

// Start the server only if not in test mode
if (process.env.NODE_ENV !== 'test') {
    /**
     * Starts the Express server.
     * @function
     * @name listen
     * @description Starts the server on the specified port.
     */
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
}

module.exports = app; // Export for testing
