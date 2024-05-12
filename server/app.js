// ------------ IMPORTS AND CONSTANTS ------------ //

require('dotenv').config();

const express = require('express'); 
const cors = require('cors');
const morgan = require('morgan');
const db = require('./db');

const app = express();
const port = process.env.PORT || 3001;

const DUMMY_DATA = [
    {
        r_id: 1,
        name: 'test',
        location: 'City, State',
        price_range: '1'
    },
    {
        r_id: 2,
        name: 'test2',
        location: 'City, State',
        price_range: '4'
    }
];

// ------------ MIDDLEWARE ------------ //

app.use(cors()); // enables cross-origin resource sharing
app.use(express.json()); // gives us access to req.body to get JSON data from client
app.use(morgan('dev')); // HTTPS logging middleware

// ------------ ROUTES ------------ //

// GET all restaurants
app.get('/api/v1/restaurants', async (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            ...DUMMY_DATA
        }
    });
});

// GET restaurant by id
app.get('/api/v1/restaurants/:id', async (req, res) => {
    const { id } = req.params;
    const restaurant = DUMMY_DATA.find((rest) => rest.r_id === parseInt(id)) || {};

    res.status(200).json({
        status: 'success',
        data: {
            ...restaurant
        }
    });
});

// POST new restaurant
app.post('/api/v1/restaurants', async (req, res) => {
    const restaurant = req.body;
    
    res.status(201).json({
        status: 'success',
        data: {
            ...restaurant
        }
    });
});

// PUT update restaurant by id
app.put('/api/v1/restaurants/:id', async (req, res) => {
    const { id } = req.params;
    const restaurant = req.body;

    res.status(200).json({
        status: 'success',
        data: {
            id,
            ...restaurant
        }
    });
});

// DELETE remove restaurant by id
app.delete('/api/v1/restaurants/:id', async (req, res) => {
    res.status(204).json({
        status: 'success'
    });
})


// ------------ START SERVER ------------ //

app.listen(port, () => {
    console.log(`Server is up & listening on port ${port}`);
})