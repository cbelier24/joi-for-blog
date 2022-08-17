const Joi = require("joi");

const ALL_OPTIONS = ['overview_360', 'touch_screen_12_inch', 'pack_full_led', 'bose_sound', 'electric_windows', 'AC', 'ABS'];
const BASIC_OPTIONS = ['alpine_sound', 'ABS', 'AC', 'touch_screen_9_inch'];
const COLORS = ["blue", "red", "grey"];
const EDITIONS = ["active", "business", "GT"];
const BRANDS = ["audi", "tesla", "maserati", "porsche"];

Joi.object({
    color: Joi.string().required().allow(COLORS),
    edition: Joi.string().required().allow(EDITIONS),
    brand: Joi.string().required().allow(BRANDS),
    immatriculation: Joi.string().regex("^[A-Z]{1,2}-[0-9]{1,3}-[A-Z]{1,2}$"),
    immatriculationDate: Joi.string().isoDate().messages({
        'string.isoDate': 'immatriculationDate format {immatriculationDate} is not valid, please respect the following format: yyyy-mm-dd'}),
    options:
        Joi.when(Joi.ref("edition"), {
            is: Joi.string().equal(["GT"]),
            then: Joi.string().allow(...ALL_OPTIONS),
            otherwise: Joi.string().allow(...BASIC_OPTIONS),
        }),
});