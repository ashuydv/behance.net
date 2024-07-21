// import { PrismaClient } from "@prisma/client";

// const client = globalThis.prisma || new PrismaClient();
// if (process.env.NODE_ENV === "production") globalThis.prisma = client;

// export default client;

import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma