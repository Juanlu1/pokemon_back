import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsIn, IsInt, IsOptional, IsPositive, IsString, Min } from 'class-validator';

export class QueryPokemonDto {
  @ApiPropertyOptional({ default: 1 }) @IsInt() @Min(1) @IsOptional() page = 1;
  @ApiPropertyOptional({ default: 20 }) @IsInt() @IsPositive() @IsOptional() pageSize = 20;
  @ApiPropertyOptional() @IsString() @IsOptional() search?: string;
  @ApiPropertyOptional() @IsString() @IsOptional() type?: string;
  @ApiPropertyOptional({ enum: ['name','createdAt'] }) @IsIn(['name','createdAt']) @IsOptional() orderBy?: 'name'|'createdAt';
  @ApiPropertyOptional({ enum: ['asc','desc'] }) @IsIn(['asc','desc']) @IsOptional() orderDir?: 'asc'|'desc';
}
