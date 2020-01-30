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

  ngOnInit() {
    this.pokemon$ = this.pokemonService.getPokemon();
    this.pokemon$.subscribe(res => {console.log(res)});
  }

  removeFavieJSON(value: number) {       
    console.log("Try to remove from favies", value);
    this.pokemonService.removeFavie(value).subscribe(res => console.log)
  }
}
