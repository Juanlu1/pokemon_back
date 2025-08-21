import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePokemonDto } from './dtos/CreatePokemonDTO';
import { UpdatePokemonDto } from './dtos/UpdatePokemonDTO';
import { QueryPokemonDto } from './dtos/QueryPokemonDTO';

@Injectable()
export class PokemonService {
  constructor(private readonly prisma: PrismaService) {}

  async list(q: QueryPokemonDto) {
    const { page = 1, pageSize = 21, search, orderBy = 'id', orderDir = 'asc' } = q;
    const where: any = search ? {
          OR: [
            ...(!isNaN(Number(search)) ? [{ id: Number(search) }] : []),
            { name: { contains: search, mode: 'insensitive' } },
            { type: { contains: search, mode: 'insensitive' } },
          ],
        } : {};
    const [total, data] = await this.prisma.$transaction([
      this.prisma.pokemon.count({ where }),
      this.prisma.pokemon.findMany({
        where,
        orderBy: { [orderBy]: orderDir },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
    ]);
    return { total, page, pageSize, data };
  }

  async getById(id: number) {
    const pokemon = await this.prisma.pokemon.findUnique({ where: { id } });
    if (!pokemon) throw new NotFoundException('Pokemon not found');
    return pokemon;
  }

  create(dto: CreatePokemonDto) {
    return this.prisma.pokemon.create({ 
      data: dto 
    });
  }

  async update(id: number, dto: UpdatePokemonDto) {
    await this.getById(id);
    return this.prisma.pokemon.update({ where: { id }, data: dto as any });
  }

  async remove(id: number) {
    await this.getById(id);
    await this.prisma.pokemon.delete({ where: { id } });
    return { ok: true };
  }
}
