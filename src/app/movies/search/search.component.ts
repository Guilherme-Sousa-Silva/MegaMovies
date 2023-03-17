import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieInterface } from '../interface/movie-interface';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  moviesSearched: MovieInterface[] = []
  inputSearch: string = '';

  apiKEY = '1d68b7d9de49d2d5a6854d16ed49a2fd';
  apiSearch = 'https://api.themoviedb.org/3/search/movie';
  apiSearchMovies = `${this.apiSearch}?api_key=${this.apiKEY}`;
  apiImg = 'https://image.tmdb.org/t/p/w500';

  constructor(
    private service: MoviesService,
    private route: ActivatedRoute
  ){}
  
  ngOnInit(): void {
  }

  getSearch(value: string) {
    this.inputSearch = value;
    this.service.searchMovies(`${this.apiSearchMovies}&query=${this.inputSearch}`).subscribe(search => {
      this.moviesSearched = search.results;
      console.log(this.moviesSearched);
      return this.moviesSearched;
    });
  }

  fixedNumber(number: number){
    return number.toFixed(2);
  }
}
