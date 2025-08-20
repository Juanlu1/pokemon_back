import { PartialType } from '@nestjs/swagger';
import { CreatePokemonDto } from './CreatePokemonDTO';

export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {}
