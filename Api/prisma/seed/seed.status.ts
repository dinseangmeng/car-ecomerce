import { PrismaClient, Status } from '@prisma/client';

const prisma = new PrismaClient();

  
  export default async function seed() {
    await prisma.status.deleteMany()

    await prisma.status.createMany({
      data:[
        { id: 1, statusName: 'admin' ,created: new Date(),updated:null},
        { id: 2, statusName: 'normal',created: new Date(),updated:null },
      ]
    })
  }

  