package com.movies.api.moviesapi.services;

import com.movies.api.moviesapi.model.Movie;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface MovieService {

    List<Movie> getMovies();
    Optional<Movie> getMovie(int id);
    List<String> popularMovies();
    List<String> newReleases();
    List<String> amongstFriends(int id);
    List<String> topTen(int id);
    Movie insert(Movie p);
    boolean deleteMovie(int id);
    boolean update(Movie p);
}
