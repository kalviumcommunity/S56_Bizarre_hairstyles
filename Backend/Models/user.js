const mongoose = require('mongoose')
const Joi = require('joi')

const validatePayload =(inputSchema)=>(payload)=> inputSchema.validate(payload,{abortEarly:false})

const userSchema = new mongoose.Schema({
    hairstyle_name:{type: String, required: true},
    description:{type: String, required: true},
    bizarreness_level: {type:Number, required: true},
    category:{type: String, required: true},
    accessories_involved:{type: String, required: true},
    image:{type: String, required: true}
})

    const inputSchema = Joi.object({
    hairstyle_name: Joi.string().strict().required(),
    description: Joi.string().required(),
    bizarreness_level: Joi.number().required(),
    category:Joi.string().required(),
    accessories_involved:Joi.string().required(),
    image:Joi.string().required()
})
    


const userModel = mongoose.model("bizarre hairstyle", userSchema)
module.exports = userModel, validatePayload(inputSchema)

