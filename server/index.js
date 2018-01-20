const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config()

const app = express();
app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
    });

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Welcome to the Big Show on Port ${port}!`);
})