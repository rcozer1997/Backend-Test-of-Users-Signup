import { prisma } from '../configs/db'
import express from 'express'

interface CreateUserArgs{
    name: string;
    email: string;
    password: string;
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

export {createUserService}