const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoute = require('./routes/authRoute');
const specialityRoute = require('./routes/specialityRoute')
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

app.use(cors());
app.use(express.json());

// API routes
app.use("/api", authRoute);
app.use("/api",specialityRoute);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});