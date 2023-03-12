
import { Role } from "@prisma/client";
import { builder } from "../builder";
import { prisma } from "../db";

builder.enumType(Role, {
    name: 'Role',
})

builder.prismaObject("User", {
    fields: t => ({
        id: t.exposeID("id"),
        name: t.exposeString("name"),
        messages: t.relation("messages", {
            args: {
                oldestFirst: t.arg.boolean(),
            },
            query: (args, context) => ({
                orderBy: {
                    createdAt: args.oldestFirst ? 'asc' : 'desc',
                },
            })
        }),
        role: t.field({
            type: Role,
            resolve: (user) => user.role as Role,
        }),
    })
})

builder.queryField("users", (t) =>
    t.prismaField({
        type: ["User"],
        resolve: async (query, root, args, ctx, info) => {
            return prisma.user.findMany({ ...query });
        },
    })
);
