import { prisma } from '../../configs/db'
import express from 'express'
import {Request, Response, NextFunction} from "express"
import * as UserService from '../../services/user.service'
import { string } from 'joi'


const createUserController = async (req:Request, res:Response) => {
  const {name, email, password} = req.body
  const result = await UserService.createUserService({name, email, password})
  res.status(201).json(result)
}

const findUsersController = async (req:Request, res: Response) => {
  const email = req.query.email as string
  const users = await UserService.findUsersService({email})
  res.status(200).json(users)
}

const deleteUsersController = async (req:Request, res: Response) => {
  const id = parseInt(req.params.id)
  let post
  try {
    post = await UserService.deleteUserService({id})
  } catch (error) {
      console.log(error)
  }
  res.status(204).send()
}

const updateUserController = async (req:Request, res: Response) => {
  const id = parseInt(req.params.id)
  let updateUser 
  try {
    updateUser = await UserService.updateUserService({id})
  } catch(error){
    console.log(error)
  }
  res.json(updateUser)
}


/*
app.delete('/users/:id', validateId ,async (req, res) => {
  const { id } = req.params
  let post
  try {
    post = await prisma.user.delete({
      where: { id: Number(id)},
    })
  } catch (error) {
    console.log(error)
  }
  res.status(204).send()
})
*/

/*
app.patch('/users/:id', validateId, async (req, res) => {
  console.log('request done') 
  const { id } = req.params
  let updateUser
  try {
    updateUser = await prisma.user.update(
      {
        select: {
          id: true,
        },
        where: {
          id: Number(id)
        },
        data: {
          name: 'Uiso'
        }
      }
    )
  } catch (error) {
    console.log(error)
  }
  res.json(updateUser)
})
*/


export {createUserController, findUsersController, updateUserController, deleteUsersController}