import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/PokemonModule';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [PokemonModule],
  providers: [PrismaService],
})
export class AppModule {}
