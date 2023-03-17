import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieInterface } from '../interface/movie-interface';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

  movie: MovieInterface = {
    adult: true,
    budget: 0,
    revenue: 0,
    backdrop_path: '',
    id: 0,
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    release_date: '',
    title: '',
    video: true,
    vote_average: 0,
    vote_count: 0,
    runtime: 0,
  }

  apiImg = 'https://image.tmdb.org/t/p/w500';

  constructor(
    private service: MoviesService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getId(parseInt(id!)).subscribe(movie => {
      this.movie = movie;
      console.log(movie);
    })
  }

  fixedNumber(number: number){
    return number.toFixed(2);
  }

  formatCurrency(number: number){
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    })
  }
}
