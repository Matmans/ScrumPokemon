import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../shared/models/pokemon.model';
import { HttpClient } from '@angular/common/http';
import { tap} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PokemonService } from '../shared/services/pokemon.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  public pokemon$: Observable<Pokemon[]>;

  PokemonPhoto: string = `https://img.pokemondb.net/artwork/`;
  end: string = `.jpg`;

  constructor(private pokemonService : PokemonService) { }

  removeFavie(value) {
    const newPokiesJSON = new Pokemon(null, value);
    this.pokemonService.addFavie(newPokiesJSON)
      .subscribe((addedPokemon) => {
        // pokemons opnieuw ophalen in de subscription
        this.pokemon$ = this.pokemonService.getPokemon();
      });
  }

  ngOnInit() {
    this.pokemon$ = this.pokemonService.getPokemon();
   // check // this.pokemon$.subscribe(res => {console.log(res)});
  }
}
