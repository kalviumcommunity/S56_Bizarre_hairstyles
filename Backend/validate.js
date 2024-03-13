const Joi = require('joi')

const validateInput = (schema) => (payload) => {
    return schema.validate(payload, { abortEarly: false });
}

const inputSchema = Joi.object({
    hairstyle_name: Joi.string().required(),
    description: Joi.string().required(),
    bizarreness_level: Joi.number().required(),
    category:Joi.string().required(),
    accessories_involved:Joi.string().required(),
    image:Joi.string().required()
})


const validateData = validateInput(inputSchema);
module.exports = validateData