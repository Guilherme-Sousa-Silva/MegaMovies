import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './movies/details/details.component';
import { MoviesComponent } from './movies/movies/movies.component';
import { SearchComponent } from './movies/search/search.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bestmovies',
    pathMatch: 'full'
  },
  {
    path: 'bestmovies',
    component: MoviesComponent
  },
  {
    path: 'movie/details/:id',
    component: DetailsComponent
  },
  {
    path: 'movies/search',
    component: SearchComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
