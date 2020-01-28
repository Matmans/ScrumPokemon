import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../shared/models/pokemon.model';
import { PokemonService } from '../shared/services/pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pokemon$: Observable<Pokemon[]>;
  public pokemonDetail$: Observable<any[]>;

  constructor(private pokemonService: PokemonService) { }

  PokemonPhoto: string = `https://img.pokemondb.net/artwork/`;
  end: string = `.jpg`;

  addFavie(value) {
    const newPokiesJSON = new Pokemon(null, value);
    this.pokemonService.addFavieJSON(newPokiesJSON)
      .subscribe((addedPokemon) => {
        // pokemons opnieuw ophalen in de subscription
        this.pokemon$ = this.pokemonService.getPokemon();
      });
  }

  ngOnInit() {
    this.pokemon$ = this.pokemonService.getPokeApi();
    this.pokemon$.subscribe(res => { console.log(res) });
  }

}
