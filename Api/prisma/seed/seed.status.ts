import { PrismaClient, Status } from '@prisma/client';

const prisma = new PrismaClient();
const statuses: Status[] = [
    { id: 1, statusName: 'admin' ,created: new Date(),updated:null},
    { id: 2, statusName: 'normal',created: new Date(),updated:null },
  ];
  
  async function seed() {
    for (const status of statuses) {
      await prisma.status.create({ data: status });
    }
  }
  seed()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
  