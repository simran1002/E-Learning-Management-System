// database.js

const { Neon } = require('@neon-js/client');

const neon = new Neon({ apiUrl: 'YOUR_NEON_API_URL', apiKey: 'YOUR_NEON_API_KEY' });

module.exports = neon;
