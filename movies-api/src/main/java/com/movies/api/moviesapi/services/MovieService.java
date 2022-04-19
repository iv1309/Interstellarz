package com.movies.api.moviesapi.services;

import com.movies.api.moviesapi.model.Movie;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface MovieService {

    List<Movie> getMovies();
    Optional<Movie> getMovie(int id);
    Movie insert(Movie p);
    boolean delete(int id);
    boolean update(Movie p);
}
