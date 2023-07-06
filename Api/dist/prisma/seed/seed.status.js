"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const statuses = [
    { id: 1, statusName: 'admin', created: new Date(), updated: null },
    { id: 2, statusName: 'normal', created: new Date(), updated: null },
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
//# sourceMappingURL=seed.status.js.map