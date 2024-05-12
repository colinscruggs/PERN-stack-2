require('dotenv').config();

const express = require('express'); 
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

// middleware
app.use(cors()); // enables cross-origin resource sharing
app.use(express.json()); // gives us access to req.body to get JSON data from client

app.listen(port, () => {
    console.log(`Server is up & listening on port ${port}`);
})