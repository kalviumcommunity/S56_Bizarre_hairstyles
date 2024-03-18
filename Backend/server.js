const express = require('express')
const router = require('./routes.js')
const { userModel, usernameModel } = require('./Models/user.js')
const mongoose = require('mongoose')
const {inputSchema} = require ('./Models/user.js')
const mongoServer = require('./config/db.js')
const JWT = require("jsonwebtoken")
const cors = require('cors')
const { validatePayload} = require('./Models/user.js');

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

app.post("/postcontent", async (req, res) => {
  console.log(req.body); 
  try {
    const { error } = validatePayload(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    } else {
      let result = new userModel(req.body);
      await result.save();
      console.log(result);
      res.status(201).send(result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});


app.post("/auth", (req, res)=>{
  const {username} = req.body
  const token = JWT.sign({
    username: username
  } , "123", { expiresIn: '1h' })
  res.send(token)
})

app.get("/getusers", async(req,res)=>{
  console.log("hello")
  let data = await usernameModel.find({})
  res.send(data)
})

app.post("/user", async (req,res)=>{
  console.log(req.body)
  let response = new usernameModel(req.body);
   await response.save()
   res.send(response)

})

app.put(`/update/:_id`, async(req, res) => {
  const  {_id } = req.params;
  console.log(_id)
  try {
    const updatedUser = await userModel.findByIdAndUpdate({_id:_id}, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    console.log("Successfully updated:", updatedUser);
    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: error.message });
  }
})


app.delete(`/delete/:_id`, async(req, res) => {
  const  {_id} = req.params;
  console.log(_id)
  try {
    const deletedUser = await userModel.findByIdAndDelete({_id:_id}, req.body, { new: true });
    if (!deletedUser) {
      return res.status(404).json({ error: 'Data not found' });
    }
    console.log("Successfully Deleted:", deletedUser);
    res.json(deletedUser);
  } catch (error) {
    console.error("Error Deleting data:", error);
    res.status(500).json({ error: error.message });
  }
});


if (require.main === module) {
    app.listen(3200, (err) => {
       connectToDB()
        if (err) console.error(err);
        else console.log('Server is running on port 3200');
    });
}

module.exports = app;