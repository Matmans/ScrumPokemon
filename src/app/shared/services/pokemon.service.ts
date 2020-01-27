import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from '../models/pokemon.model';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url: string =  "https://pokeapi.co/api/v2/pokemon"

  constructor(private http: HttpClient) { }

  getAllPoke(): Observable<Pokemon[]> {
    for (let i = 1; i < 807 ; i++) {
      return this.http
        .get<Pokemon[]>(`${this.url}/${i}`)
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
