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

  PokemonPhoto: string = '';
  

  addFavie(value) {
    console.log(value.url);
    this.pokemonDetail$ = this.pokemonService.addFavie(value.url);
    this.pokemonDetail$.subscribe(res => { console.log(res) });
    this.addFavieDetail(this.pokemonDetail$);
  }

  addFavieDetail(faviedetails) {
    // id === null, omdat deze auto wordt ingevuld door de json server
    console.log(faviedetails);
    const newPokiesJSON = new Pokemon(null, faviedetails.name, faviedetails.type);
    this.pokemonService.addFavieJSON(newPokiesJSON)
      .subscribe((addedPokemon) => {
        // pokemons opnieuw ophalen in de subscription
        this.pokemon$ = this.pokemonService.getPokemon();
      });
  }

  ngOnInit() {
    this.pokemon$ = this.pokemonService.getPokeApi();
    this.pokemon$.subscribe(res => { console.log(res) });

    this.PokemonPhoto = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;
  }

}
