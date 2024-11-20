import { PrismaClient } from '@prisma/client';
import { events } from 'core';

async function seed() {
  const prisma = new PrismaClient();
  const transactions = events.map(async (event) => {
    await prisma.event.create({
      data: {
        id: event.id,
        alias: event.alias,
        name: event.name,
        password: event.password,
        date: event.date,
        local: event.local,
        description: event.description,
        image: event.image,
        imageBackground: event.imageBackground,
        audience: event.audience,
        guests: {
          create: event.guests.map((guest) => ({
            id: guest.id,
            name: guest.name,
            email: guest.email,
            confirmed: guest.confirmed,
            hasCompanions: guest.hasCompanions,
            numberOfCompanions: guest.numberOfCompanions,
          })),
        },
      },
    });
  });

  await Promise.all(transactions);
}

seed();
