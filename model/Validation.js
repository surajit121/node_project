import joi from "joi";

const uservalidation = joi.object({
  name: joi.string().min(3).max(10).required(),

  email: joi.string().email({ minDomainSegments: 2 }).required(),

  password: joi.string()
    .min(6)
    .max(30)
    .pattern(new RegExp("^[a-zA-Z0-9@#$%^&+=!]*$"))
    .required(),
});

export default uservalidation;
