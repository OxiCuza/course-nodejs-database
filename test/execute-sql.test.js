import { prismaClient } from "../src/prisma-client.js";

describe('Prisma Client', () => {
    it('should be execute sql', async () => {
        const id = '1';
        const name = 'Name Test';

        const executed = await prismaClient.$executeRaw`INSERT INTO sample(id, name) VALUES(${id}, ${name})`;
        expect(executed).toBe(1);
    });
})