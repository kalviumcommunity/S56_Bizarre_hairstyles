const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id:Number,
    hairstyle_name:String,
    description:String,
    bizarreness_level:Number,
    category:String,
    is_colorful:Boolean,
    accessories_involved:String,
    image:String
})

const userModel = mongoose.model("bizarre hairstyles", userSchema)

module.exports = userModel

