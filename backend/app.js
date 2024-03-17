const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const dotenv = require("dotenv");
dotenv.config();


const app = express();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDb connection setup successfully");
  }).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  });


// API routes
// ...
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});