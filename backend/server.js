import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import { connectDb } from './config/connectDb.js';

// Create express app
const app = express();

// Load environment variables
dotenv.config();

// Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

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
