const mongoose = require("mongoose");
require('dotenv').config();

const connectDatabase = async () => {
  try {
    if (!process.env.DB_URL) {
      throw new Error('MongoDB connection URL not found in environment variables');
    }

    const conn = await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected with server: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Database connection failed: ${err.message}`);
    process.exit(1); // Exit process to avoid running with an invalid DB connection
  }
};

module.exports = connectDatabase;

