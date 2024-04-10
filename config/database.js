// database.js
require('dotenv').config();
const { Neon } = require('@neon-js/client');

const neon = new Neon({ apiUrl: process.env.NEON_API_URL, apiKey: process.env.NEON_API_KEY });

module.exports = neon;
