const express = require('express');
const app = express();
app.use(express.json());

app.get('/ping' , (req, res) =>{
    res.status(200).send("pong")
})

const mongoose = require('mongoose');
const mongoServer = require('./config/db.js')

process.on('unhandledRejection', error => {
  console.error('Unhandled promise rejection:', error);
});

const connectToDB = async () => {
  try {
    await mongoose.connect(mongoServer.mongoURI)
    console.log('connected to mongoDB');
  } catch (err) {
    console.error('error connecting to mongoDB:', err.message);
  }
};

const disconnectFromDB = async () => {
  try {
    await mongoose.connection.close()
    console.log('disconnected from mongoDB');
  } catch (err) {
    console.error('error disconnecting from mongoDB:', err.message);
  }
};

module.exports = {
  connectToDB,
  disconnectFromDB,
  mongooseConnection: mongoose.connection,
};


if (require.main === module) {
    app.listen(3000, (err) => {
        if (err) console.error(err);
        else console.log('Server is running on port 3000');
    });
}

module.exports = app;