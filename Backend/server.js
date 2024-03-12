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
    console.log(req.body)
    let result = new userModel(req.body);
    await result.save()
    res.send(result)
   } catch (error) {
    res.status(500).json({ error: error.message })
   }
})

// app.put("/update/:id", async(req, res)=>{
//   const {id} = req.params
//   try{
//     userModel.findByIdAndUpdate({_id:id}, req.body)
//     .then((res)=>{
//       console.log("Successfully updated", res)
//     })
//     .catch((err)=>{
//       console.error(err)
//     })
//   }
//   catch(err){
//     console.error(err)
//   }
// })

app.put(`/update/id`, async(req, res) => {
  const { id } = req.params;
  try {
    const updatedUser = await userModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    console.log("Successfully updated:", updatedUser);
    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: error.message });
  }
});

if (require.main === module) {
    app.listen(3200, (err) => {
        if (err) console.error(err);
        else console.log('Server is running on port 3200');
    });
}

module.exports = app;