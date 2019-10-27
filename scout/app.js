const express = require('express');
const path = require('path');

const app = module.exports = express();

app.use(express.static(path.join(__dirname, 'dist')));
