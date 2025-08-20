import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsIn, IsInt, IsOptional, IsPositive, IsString, Min } from 'class-validator';

export class QueryPokemonDto {
  @ApiPropertyOptional({ default: 1 }) @Type(() => Number) @IsInt() @Min(1) @IsOptional() page = 1;
  @ApiPropertyOptional({ default: 20 }) @Type(() => Number) @IsInt() @IsPositive() @IsOptional() pageSize = 20;
  @ApiPropertyOptional() @IsString() @IsOptional() search?: string;
  @ApiPropertyOptional() @IsString() @IsOptional() type?: string;
  @ApiPropertyOptional({ enum: ['name','id'] }) @IsIn(['name','id']) @IsOptional() orderBy?: 'name'| 'id';
  @ApiPropertyOptional({ enum: ['asc','desc'] }) @IsIn(['asc','desc']) @IsOptional() orderDir?: 'asc'|'desc';
}
