import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { Role } from "@prisma/client";

async function main() {
    // Delete all `User` and `Message` records
    await prisma.message.deleteMany({});
    await prisma.user.deleteMany({});
    // (Re-)Create dummy `User` and `Message` records
    await prisma.user.create({
        data: {
            name: "Jack",
            messages: {
                create: [
                    {
                        body: "A Note for Jack",
                    },
                    {
                        body: "Another note for Jack",
                    },
                ],
            },
            role: Role.USER
        },
    });
    await prisma.user.create({
        data: {
            name: "Ryan",
            messages: {
                create: [
                    {
                        body: "A Note for Ryan",
                    },
                    {
                        body: "Another note for Ryan",
                    },
                ],
            },
            role: Role.USER
        },
    });
    await prisma.user.create({
        data: {
            name: "Adam",
            messages: {
                create: [
                    {
                        body: "A Note for Adam",
                    },
                    {
                        body: "Another note for Adam",
                    },
                ],
            },
            role: Role.ADMIN
        },
    });
}

main().then(() => {
    console.log("Data seeded...");
});
