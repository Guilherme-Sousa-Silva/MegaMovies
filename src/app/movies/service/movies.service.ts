import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apiKEY = '1d68b7d9de49d2d5a6854d16ed49a2fd';
  api = 'https://api.themoviedb.org/3/movie/';
  apiSearch = 'https://api.themoviedb.org/3/search/movie/';
  apiImg = 'https://image.tmdb.org/t/p/w500';
  topRatedMovies = `${this.api}top_rated?api_key=${this.apiKEY}`
  apiSearchMovies = `${this.apiSearch}?api_key=${this.apiKEY}`;

  constructor(private http: HttpClient) { }

  getTopRatedMovies(): Observable<any> {
    return this.http.get<any>(this.topRatedMovies);
  }

  searchMovies(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  getId(id: number):Observable<any> {
    const url = `${this.api}/${id}?api_key=${this.apiKEY}`
    return this.http.get<any>(url);
  }

}
