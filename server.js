const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connect database
connectDB();

app.get('/', (req, res) => res.send('API Running'));

app.use('/api/auth', require('./routes/api/auth.js'));
app.use('/api/costs', require('./routes/api/auth.js'));
app.use('/api/restaurants', require('./routes/api/auth.js'));
app.use('/api/users', require('./routes/api/auth.js'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
