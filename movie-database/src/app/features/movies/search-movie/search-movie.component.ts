import { Component, OnInit } from '@angular/core';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

import { Movie } from 'src/app/core/model/movies';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {

  }
  
  // Push a search term into the observable stream.
  search(term: string): void {
  }
}
