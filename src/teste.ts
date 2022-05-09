import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.post('/user', async (req, res) => {
    const result = await prisma.user.create({
      data: { ...req.body },
    })
    res.json(result)
  })
/*
app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany()
    res.json(users)
  })
*/
  app.get('/users', async (req, res) => {
    const users = await prisma.user.findMany(
        {
        where: {
          email: {
            contains: 'alice'
          }
        }
      }
    ) 
    // console.log(users)
    res.json(users)
  })

    //deletes an user by id
  app.delete('/users/:id', async (req, res) => {
    const { id } = req.params
    const post = await prisma.user.delete({
      where: { id: Number(id) },
    })
    res.json(post)
  })
/*
  //deletes an user by email
  app.delete('/users/:email', async (req, res) => {
    const { email } = req.params
    const post = await prisma.user.delete({
      where: { email: String(email) },
    })
    res.json(post)
  })
  */
app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000'),
)