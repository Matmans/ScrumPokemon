import { Component, OnInit } from '@angular/core';
import { Pokemon } from './shared/models/pokemon.model';
import { HttpClient } from '@angular/common/http';
import { tap} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PokemonService } from './shared/services/pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pokemon$: Observable<Pokemon[]>;
  pokemonDetail$: Observable<any>;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemon$ = this.pokemonService.getAllPoke();
  }

  getPokemon(id: number) {
  }

  // Land toevoegen --> doorgeven aan de service
  AddFaviPoke (pokemonName: string, pokemonSprite: string, pokemonTypes: string) {
    // id === null, omdat deze auto wordt ingevuld door de json server
    const newPokemon = new Pokemon(null, pokemonName, pokemonSprite, pokemonTypes);
    this.pokemonService.addFaviePoke(newPokemon)
      .subscribe ((addedPokemon: Pokemon) => {}); 
  }
}