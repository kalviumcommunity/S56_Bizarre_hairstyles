const Joi = require('joi')

const inputSchema = Joi.object({
    hairstyle_name: Joi.string().required(),
    description: Joi.string().required(),
    bizarreness_level: Joi.number().required(),
    category:Joi.string().required(),
    accessories_involved:Joi.string().required(),
    image:Joi.string().required()
})


export default function validateInput(data) {
    return inputSchema.validate(data);
}

