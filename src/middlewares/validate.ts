import { PrismaClient } from '@prisma/client'
import express from 'express'
import {Request, Response, NextFunction} from 'express'

const validateId = (req: Request, res: Response, next: NextFunction) => {
    const {id} = req.params
    if(typeof Number(id) === 'number'){
      next() 
    }
    else{
      res.status(422).send()
    }
  } 

export {validateId}