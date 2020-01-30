import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../shared/models/pokemon.model';
import { PokemonService } from '../shared/services/pokemon.service';
import { Observable } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pokemon$: Observable<Pokemon[]>;
  public pokemonDetail$: Observable<Pokemon[]>;
  public pokemonFavies$: Observable<Pokemon[]>;

  zesFavies: boolean = false;

  constructor(private pokemonService: PokemonService) { }

  PokemonPhoto: string = `https://play.pokemonshowdown.com/sprites/ani/`;
  end: string = `.gif`;

  check: boolean;
  currentPokemon: string;

  faviesPokemon: number;

  addFavie(value) {
    this.faviesPokemon = Object.values(this.pokemonFavies$).length;

    console.log(this.faviesPokemon);

    if (this.faviesPokemon > 5)
    {
      alert("You already have 6 favies");
    }
    else {
      const newPokiesJSON = new Pokemon(null, value, null, null, null, null, null);
      this.pokemonService.addFavieJSON(newPokiesJSON)
        .subscribe((addedPokemon) => {
          // pokemons opnieuw ophalen in de subscription
          this.pokemon$ = this.pokemonService.getPokemon();
        });
    }
  }

  getDetail(url: string, name: string) {
    console.log(this.check);
    console.log(url);

    this.check = !this.check;

    this.currentPokemon = name;
    this.pokemonDetail$ = this.pokemonService.getDetail(url);
  }

  ngOnInit() {
    this.pokemon$ = this.pokemonService.getPokeApi();
    this.pokemonFavies$ = this.pokemonService.getPokemon();

    this.pokemon$.subscribe(res => { console.log(res) });
  }

}
