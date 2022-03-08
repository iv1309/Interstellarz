import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MoviesService } from 'src/app/core/services/movies.service';
import { Movie } from 'src/app/core/model/movies';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie | undefined;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.moviesService.getMovie(id)
      .subscribe(movie => this.movie = movie);
  }

  goBack(): void {
    this.location.back();
  }

}
