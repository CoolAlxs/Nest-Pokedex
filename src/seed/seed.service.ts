import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PokeResponse } from './interfaces/poke.response.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,

    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany({});

    const data: PokeResponse = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=650',
    );

    const pokemonToInsert: { name: string; numero: number }[] = [];

    data.results.forEach(async ({ name, url }) => {
      const segments = url.split('/');
      const numero = +segments[segments.length - 2];
      pokemonToInsert.push({ name, numero });
    });

    await this.pokemonModel.insertMany(pokemonToInsert);

    return 'Seed executed successfully';
  }
}
