// ------------ IMPORTS AND CONSTANTS ------------ //

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./db");

const app = express();
const port = process.env.PORT || 3001;

// ------------ MIDDLEWARE ------------ //

app.use(cors()); // enables cross-origin resource sharing
app.use(express.json()); // gives us access to req.body to get JSON data from client
app.use(morgan("dev")); // HTTPS logging middleware

// ------------ ROUTES ------------ //

// GET all restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const restaurants = await db.query("SELECT * FROM restaurants");

    res.status(200).json({
      status: "success",
      results: restaurants.rows.length,
      data: {
        restaurants: restaurants.rows,
      },
    });
  } catch (err) {
    console.error(err.message);
  }
});

// GET restaurant by id
app.get("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const restaurants = await db.query(
      "SELECT * FROM restaurants WHERE r_id = $1",
      [id]
    );

    res.status(200).json({
      status: "success",
      results: restaurants.rows.length,
      data: {
        restaurant: restaurants.rows[0],
      },
    });
  } catch (err) {
    console.error(err.message);
  }
});

// POST new restaurant
app.post("/api/v1/restaurants", async (req, res, next) => {
  try {
    const { name, location, price_range } = req.body;

    const restaurant = await db.query(
      "INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) RETURNING *",
      [name, location, price_range]
    );

    res.status(201).json({
      status: "success",
      data: {
        restaurant: restaurant.rows[0],
      },
    });
  } catch (err) {
    console.error(err.message);
  }
});

// PUT update restaurant by id
app.put("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, location, price_range } = req.body;

    const restaurant = await db.query(
      "UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE r_id = $4 RETURNING *",
      [name, location, price_range, id]
    );

    res.status(200).json({
      status: "success",
      data: {
        restaurant: restaurant.rows[0],
      },
    });
  } catch (err) {
    console.error(err.message);
  }
});

// DELETE remove restaurant by id
app.delete("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await db.query("DELETE FROM restaurants WHERE r_id = $1 RETURNING *", [id]);

    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    console.error(err.message);
  }
});

// ------------ START SERVER ------------ //

app.listen(port, () => {
  console.log(`Server is up & listening on port ${port}`);
});
