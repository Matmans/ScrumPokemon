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
  public pokemonFavies$: Observable<Pokemon[]>;

  zesFavies: boolean = false;

  constructor(private pokemonService: PokemonService) { }

  PokemonPhoto: string = `https://play.pokemonshowdown.com/sprites/ani/`;
  end: string = `.gif`;

  check: boolean;
  currentPokemon: string;

  addFavie(value) {
    const newPokiesJSON = new Pokemon(null, value);
    this.pokemonService.addFavieJSON(newPokiesJSON)
      .subscribe((addedPokemon) => {
        // pokemons opnieuw ophalen in de subscription
        this.pokemon$ = this.pokemonService.getPokemon();
      });
  }

  showDetails(pokemonName: string) {
    this.check = !this.check;
    this.currentPokemon = pokemonName;
  }

  ngOnInit() {
    this.pokemon$ = this.pokemonService.getPokeApi();
    this.pokemonFavies$ = this.pokemonService.getPokemon();

    this.pokemon$.subscribe(res => { console.log(res) });
  }

}
