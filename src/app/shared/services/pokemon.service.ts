import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pokemon } from '../models/pokemon.model';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  urllocal = "http://localhost:3000/faviePokemon";
  url: string =  "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807"

  constructor(private http: HttpClient) { }

  getPokemon(): Observable<Pokemon[]> {
    return this.http
      .get<Pokemon[]>(this.urllocal)
      .pipe(tap(result => console.log("via json-server: ", result)));
  }

  getPokeApi(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.url).pipe(map(res => res["results"]));
  }

  addFavie(value): Observable<any[]> {
    const headers = new HttpHeaders().set("Content-type", "application/json");
    return this.http.get<any[]>(value).pipe();
  }

  addFavieJSON(value): Observable<any> {
    const headers = new HttpHeaders().set("Content-type", "application/json");
    return this.http.post(this.urllocal, value, { headers: headers });
  }
}
