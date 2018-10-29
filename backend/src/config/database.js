import mongoose from 'mongoose';

mongoose.Promise = Promise;

export async function connectDb() {
  try {
    await mongoose.connect(process.env.DB_URI, { useNewUrlParser: true });
  } catch(error) {
    throw error;
  }
}
