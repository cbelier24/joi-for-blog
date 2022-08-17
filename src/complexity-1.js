const Joi = require("joi");

Joi.object({
    color: Joi.string().required(),
});