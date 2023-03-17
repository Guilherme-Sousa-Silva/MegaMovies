import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output} from '@angular/core';
import { map, Observable } from 'rxjs';
import { MoviesService } from '../service/movies.service';
import { MovieInterface } from '../interface/movie-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit{

  allMovies: MovieInterface[] = [];
  movieId: number = 0;
  apiImg = 'https://image.tmdb.org/t/p/w500';
 

  constructor(
    private service: MoviesService, 
    ){}

  ngOnInit(): void {
    this.service.getTopRatedMovies().subscribe(movies => {
      this.allMovies = movies.results
      this.movieId = movies.results.id;
      console.log(this.allMovies);
    })
  }

}
