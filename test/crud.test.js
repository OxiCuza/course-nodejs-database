import { prismaClient } from "../src/prisma-client"

describe('Prisma Client', () => {
    it('should be able to create customer', async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id: 1,
                name: 'Jhon Doe',
                email: 'jhondoe@gmail.com',
                phone: '+26093'
            }
        })

        expect(customer.id).toBe(1);
        expect(customer.name).toBe('Jhon Doe');
    })

    it('should be able to update customer', async () => {
        const customer = await prismaClient.customer.update({
            data: {
                phone: '+2609345'
            },
            where: {
                id: 1
            }
        })

        expect(customer.id).toBe(1);
        expect(customer.phone).toBe('+2609345');
    })

    it('should be able to select customer', async () => {
        const customer = await prismaClient.customer.findUnique({
            where: {
                id: 1
            }
        })

        expect(customer.id).toBe(1);
        expect(customer.phone).toBe('+2609345');
    })

    it('should be able to delete customer', async () => {
        const customer = await prismaClient.customer.delete({
            where: {
                id: 1
            }
        })

        expect(customer.id).toBe(1);
        expect(customer.phone).toBe('+2609345');
    })
})