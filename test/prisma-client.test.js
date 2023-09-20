const { PrismaClient } = require("@prisma/client")

describe('Prisma client', () => {
    it('should connet to db', async () => {
        const prisma = new PrismaClient();
        await prisma.$connect();

        console.log('success');

        await prisma.$disconnect();
    })
})