import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './config/connectDb.js';

// Create express app
const app = express();

// Load environment variables
dotenv.config();

// Get port from environment variables
const PORT = process.env.PORT || 5001;

// Connect to DB and start the server
const startServer = async () => {
  try {
    // Connect to database
    await connectDb();

    // Start server
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error: ', error.message);
    process.exit(1);
  }
};

// Call startServer function
startServer();
