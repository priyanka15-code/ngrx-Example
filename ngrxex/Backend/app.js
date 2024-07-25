const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();


app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/testing', { useNewUrlParser: true, useUnifiedTopology: true });

const authRoute = require('./Routes/auth.routes');
const userRoute = require('./Routes/user.routes');

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
