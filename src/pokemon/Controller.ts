import { Controller, Get, Param, Post, Body, Patch, Delete, Query } from '@nestjs/common';
import { PokemonService } from './Service';
import { CreatePokemonDto } from './dtos/CreatePokemonDTO';
import { UpdatePokemonDto } from './dtos/UpdatePokemonDTO';
import { QueryPokemonDto } from './dtos/QueryPokemonDTO';


@Controller('pokemons')
export class PokemonController {
  constructor(private readonly service: PokemonService) {}

  @Get()
  list(@Query() q: QueryPokemonDto) {
    return this.service.list(q);
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.service.getById(id);
  }

  @Post()
  create(@Body() dto: CreatePokemonDto) {
    return this.service.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdatePokemonDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(id);
  }
}
