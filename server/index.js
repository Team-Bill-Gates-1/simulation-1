const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config()

const app = express();
app.use(bodyparser.json());
app.use(cors());

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Welcome to the Big Show on Port ${port}!`);
})