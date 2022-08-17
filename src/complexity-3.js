const Joi = require("joi");

Joi.object({
    color: Joi.string().required().allow(["blue", "red", "grey"]),
    brand: Joi.string().required().allow(["audi", "tesla", "maserati", "porsche"]),
    immatriculation: Joi.string().regex("^[A-Z]{1,2}-[0-9]{1,3}-[A-Z]{1,2}$"),
});