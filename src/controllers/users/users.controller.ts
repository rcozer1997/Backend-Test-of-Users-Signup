import { prisma } from '../../configs/db'
import express from 'express'
import {Request, Response, NextFunction} from "express"
import { validateId } from '../../middlewares/validate'
import { createUserService } from '../../services/user'

const app = express()
app.use(express.json())

const createUserController = async (req:Request, res:Response) => {
  const {name, email, password} = req.body
  const result = await createUserService({name, email, password})
  res.status(201).json(result)
}


app.get('/users', async (req, res) => {
  
  const { email, name } = req.query
  const users = await prisma.user.findMany(
    {
      where: {
        email: {
          contains: email as string
        },
        name: {
          contains: name as string,
          mode: 'insensitive'
        }
      },
      orderBy: {
        id: 'desc'
      }
    }
  )
  res.json(users)
})

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

app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000'),
)

export {createUserController}