import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from '../models/pokemon.model';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  url: string = "https://pokeapi.co/api/v2/pokemon/?limit=0&offset=0";
  url2: string =  "https://pokeapi.co/api/v2/pokemon"
  id: number;

  constructor(private http: HttpClient) { }

  getAllPoke(): Observable<Pokemon[]> {
    {
      return this.http
        .get<Pokemon[]>(this.url)
        .pipe(tap(result => console.log("via json-server: ", result)));
    }
  }

  getPokemon(id: number) {
    return this.http.get<Pokemon>(`${this.url}/${id}`);
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
