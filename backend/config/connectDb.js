import mongoose from 'mongoose';

// Connect to MongoDB
export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected Successfully...');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
