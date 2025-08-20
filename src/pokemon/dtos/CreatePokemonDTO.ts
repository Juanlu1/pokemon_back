import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsUrl, Length, Min } from 'class-validator';

export class CreatePokemonDto {
  @ApiProperty() @IsString() @Length(1, 40) name!: string; // el apiProperty es del swagger
  @ApiProperty() @IsString() @Length(1, 50)  type!: string;
  @ApiProperty() @IsNumber() @Min(0) height!: number;
  @ApiProperty() @IsNumber() @Min(0) weight!: number;
  @ApiProperty() @IsUrl() imageUrl!: string;
}
