const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const shelfBaseUrl = '/api/shelf';
const binBaseUrl = '/api/bin';
const bc = require('./controllers/bins_controller');
const sc = require('./controllers/shelves_controller');
const path = require('path');
require('dotenv').config()

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "client", "build")));  
app.get("/", (req, res) => {  
 res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
}); 
massive(process.env.CONNECTION_STRING).then(dbInstance => {app.set('db', dbInstance)});

app.get(`${shelfBaseUrl}/:id`, sc.getShelves);

app.post(`${binBaseUrl}/:id`, bc.createBin);
app.get(`${binBaseUrl}/:id`, bc.getBin);
app.put(`${binBaseUrl}/:id`, bc.updateBin);
app.delete(`${binBaseUrl}/:id`, bc.deleteBin);

const port = process.env.PORT || 3001;
app.listen(port, () => {
   console.log(`Welcome to the Big Show on Port ${port}!`);
})