import express from 'express';
import mongoose from 'mongoose';

// App Config
const app = express(); //Creates instance
const port = process.env.PORT || 8000

// Middlewares


// DB Config


// API Endpoints
app.get('/', (req, res) => res.status(200).send('HELLO WORLD'));

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));