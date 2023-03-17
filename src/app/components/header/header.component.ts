import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MovieInterface } from 'src/app/movies/interface/movie-interface';
import { MoviesService } from 'src/app/movies/service/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  inputSearch: string = '';
  moviesSearched: MovieInterface[] = [];
  removeOrAdd: string = 'hide';
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  constructor(
    private service: MoviesService,
    private router: Router,
  ){}

  ngOnInit(): void {
  }

  //mapeando o valor do input
  public Search(value: string) {
    this.inputSearch = value;
    this.emmitSearch.emit(value);
  }

  // função para pesquisar filmes a partir do valor do input mapeado
  public searchMovies() {
    this.removeOrAdd = 'block';
    this.router.navigate([`movies/search`]);
  }
}
