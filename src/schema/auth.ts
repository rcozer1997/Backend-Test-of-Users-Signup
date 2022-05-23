import Joi from 'joi'


const signupSchema = Joi.object({ 
    body:Joi.object({
        name: Joi.string().alphanum().min(3).max(30).required(),
        email: Joi.string().email().min(3).max(30).required(),
        password: Joi.string().alphanum().min(3).max(30).required(),
    })
  }).unknown(true); 


export {signupSchema}
  //const result = Joi.validate(dataToValidate, schema);