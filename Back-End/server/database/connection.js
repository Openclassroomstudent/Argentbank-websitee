const mongoose = require('mongoose');

// Replace with your actual MongoDB Atlas connection string
const databaseUrl = 'mongodb+srv://lopasadia96:wi7Ub12dKctctBIv@cluster0.5p3ra30.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
    console.log('Database successfully connected');
  } catch (error) {
    console.error('Database Connectivity Error:', error);
    throw new Error(error);
  }
};
