import {Request, Response, NextFunction} from 'express'
import Joi from 'joi'

const validateSchema = (schema:Joi.ObjectSchema<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const {error} = schema.validate(req, {abortEarly:true})
      if(!error){
        next()
        return
      }
      res.status(422).send()
  }
}

  //const result = signupSchema.validate(req)

export {validateSchema}