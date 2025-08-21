// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import { PokeDex } from '@atosjs/pokemon';

const prisma = new PrismaClient();
const pokedex = new PokeDex();

async function main() {
  const ids = Array.from({ length: 1000 }, (_, i) => i + 1);

  const dataArray = await pokedex.fetch({ id: ids });

  if (Array.isArray(dataArray)) {
    for (const data of dataArray) {
    await prisma.pokemon.upsert({
      where: { id: data.id },
      update: {},
      create: {
        id: data.id,
        name: data.name,
        type: data.type.join(','),
        height: data.height,
        weight: data.weight,
        imageUrl: data.sprite,
      },
    });
    }
  } else {
    console.error('Error: dataArray is not an array.');
  }
}

main()
  .catch((e) => {
    console.error('Error al seedear Pokémon:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
