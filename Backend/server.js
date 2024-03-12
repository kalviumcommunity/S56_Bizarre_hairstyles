const express = require('express')
const router = require('./routes.js')
const userModel = require('./Models/user.js')
const mongoose = require('mongoose')
const mongoServer = require('./config/db.js')
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());
app.use(router)

app.get('/ping' , (req, res) =>{
  res.status(200).send("pong")
})

app.get("/" , (req,res)=>{
  mongoose.connection.readyState === 1 ? res.send("MongoDb Connected") : res.send("MongoDb not Connected")
})



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

connectToDB()

const disconnectFromDB = async () => {
  try {
    await mongoose.connection.close()
    console.log('disconnected from mongoDB');
  } catch (err) {
    console.error('error disconnecting from mongoDB:', err.message);
  }
};

app.get("/getdata" , async (req,res)=>{
  let data = await userModel.find({})
  res.json(data)
})

app.post("/postcontent", async(req, res)=>{
   try {
    let result = new userModel(req.body);
    await result.save()
    res.send(result)
   } catch (error) {
    res.send(error)
   }
})

if (require.main === module) {
    app.listen(3000, (err) => {
        if (err) console.error(err);
        else console.log('Server is running on port 3000');
    });
}

module.exports = app;