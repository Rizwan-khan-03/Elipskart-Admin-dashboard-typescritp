const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log('Connected to Database.'))
.catch((err) => console.log("Database Connection fail", err));