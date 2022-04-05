import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const readUsers = async (): Promise<void> => {

  const allUsers = await prisma.user.findMany();
  console.log(allUsers);

};

const findUserByEmail = async (email: any): Promise<any> => {

  return await prisma.user.findFirst({ where: { email }});

};

const createUser = async (user: { name: any, email: any }): Promise<any> => {

  return await prisma.user.create({
    data: user
  });

};

export {
  readUsers,
  findUserByEmail,
  createUser,
};