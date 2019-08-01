const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const app = express();

// Init middleware
app.use(logger);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//
app.use(express.static(path.join(__dirname, 'public')));

//
app.use('/api/picture', require('./route/api/picture'));

//
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));