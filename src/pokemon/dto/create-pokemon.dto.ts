import { MinLength, IsString, IsPositive, IsInt, Min } from 'class-validator';

export class CreatePokemonDto {
  @IsInt()
  @Min(1)
  @IsPositive()
  numero: number;

  @IsString()
  @MinLength(1)
  name: string;
}
