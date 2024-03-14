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

   const val =  inputSchema.validate()
   if(val.error){
    console.log("Invalid input", error)
   }
   else{
    return inputSchema.validate()
   }
  } catch (error) {
   res.status(500).json({ error: error.message })
  }
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
});

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