import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from '../models/pokemon.model';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url: string = "https://pokeapi.co/api/v2/pokemon/";
  id: number;

  constructor(private http: HttpClient) { }

  getAllPoke(): Observable<Pokemon[]> {
    for (let id = 1; id < 807; id++)
    {
      return this.http
      .get<Pokemon[]>(this.url + `id`)
      .pipe(map(res => res['']));
    }
  }

  addFaviePoke(newPokemon: Pokemon): Observable<any> {
    const headers = new HttpHeaders().set("Content-type", "application/json");
    return this.http.post(this.url, newPokemon, { headers: headers });
  }

  getFaviePoke(): Observable<any>{
    return
  }

  deleleteFaviePoke(): Observable<any>{
    return
  }
}
