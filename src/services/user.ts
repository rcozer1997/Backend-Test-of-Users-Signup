import { prisma } from '../configs/db'
import express from 'express'
import internal from 'stream';

interface CreateUserArgs{
    name: string;
    email: string;
    password: string;
  }

interface emailArg {
    email: string;
}
interface idArg {
    id: number;
}
const createUserService = async ({name, email, password}:CreateUserArgs) => {
    return prisma.user.create({
      data: {
        email, 
        name, 
        password
       },
    })
  }

const findUsersService = async ({email}:emailArg) => {
    return prisma.user.findMany(
    {
        where: {
            email: {
                contains: email as string
            }
        }
    }
    )
}

const deleteUserService = async ({id}:idArg) => {
    return prisma.user.delete({
    where: { id: Number(id)},
})
}



export {createUserService}
export {findUsersService}
export {deleteUserService}