package com.movies.api.moviesapi.services;

import com.movies.api.moviesapi.model.Movie;
import com.movies.api.moviesapi.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class MovieControllerHelper implements MovieService {

    @Autowired
    private MovieRepository repository;

    @Override
    public List<Movie> getMovies() {
        return repository.findAll();
    }

    @Override
    public Optional<Movie> getMovie(int id) {
        return repository.findById(id);
    }

    @Override
    public Movie insert(Movie p) {
        return null;
    }

    @Override
    public boolean delete(int id) {
        return false;
    }

    @Override
    public boolean update(Movie p) {
        return false;
    }
}
