import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PokemonService } from './Service';
import { PokemonController } from './Controller';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService, PrismaService],
})
export class PokemonModule {}
