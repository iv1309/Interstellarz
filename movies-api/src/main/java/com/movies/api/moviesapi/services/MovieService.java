package com.movies.api.moviesapi.services;

import com.movies.api.moviesapi.model.Movie;
import com.movies.api.moviesapi.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class MovieService {
    @Autowired
    private MovieRepository repository;

    public List<Movie> getMovies() {
        return (List<Movie>)repository.findAll();
    }
}
