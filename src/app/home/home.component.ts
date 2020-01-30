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

  constructor(private pokemonService: PokemonService) { }

  PokemonPhoto: string = `https://play.pokemonshowdown.com/sprites/ani/`;
  end: string = `.gif`;
  
  nidoranm: string = "nidoran-m";
  nidoranm2: string = "nidoranm";

  addFavie(value) {
    const newPokiesJSON = new Pokemon(null, value);
    this.pokemonService.addFavieJSON(newPokiesJSON)
      .subscribe((addedPokemon) => {
        // pokemons opnieuw ophalen in de subscription
        this.pokemon$ = this.pokemonService.getPokemon();
      });
  }

  checkup(pokemon) {
    for (let i = 1; i < pokemon.length ; i++) {
      if (pokemon[i].name == "nidoran-m") {
        pokemon[i].name = "nidoranm";
      }
    }
  }

  ngOnInit() {
    this.pokemon$ = this.pokemonService.getPokeApi();
    this.pokemon$.subscribe(res => { console.log(res) });

    this.checkup(this.pokemon$);
  }

}
