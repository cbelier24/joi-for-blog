const Joi = require("joi");

Joi.object({
    color: Joi.string().required().allow(["blue", "red", "grey"]),
    brand: Joi.string().required().allow(["audi", "tesla", "maserati", "porsche"]),
    immatriculation: Joi.string().regex("^[A-Z]{1,2}-[0-9]{1,3}-[A-Z]{1,2}$"),
    immatriculationDate: Joi.string().isoDate().messages({
        'string.isoDate': 'immatriculationDate format {immatriculationDate} is not valid, please respect the following format: yyyy-mm-dd'}),
});