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
        List<Movie> movies = repository.findAll();
        
        for(Movie m: movies){
            System.out.println("hello2");
            System.out.println(m.getName());
        }

        return movies;
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
    public boolean deleteMovie(int id) {
        repository.deleteGenreById(id);
        repository.deleteDirectorById(id);
        repository.deleteStudioById(id);
        repository.deleteCastById(id);
        repository.deleteMovieById(id);
        return true;
    }

    @Override
    public boolean update(Movie p) {
        return false;
    }

    @Override
    public List<String> popularMovies() {
        return repository.popularMovies();
    }

    @Override
    public List<String> newReleases() {
        return repository.newReleases();
    }

    @Override
    public List<String> amongstFriends(int id) {
        return repository.amongstFriends(id);
    }

    @Override
    public List<String> topTen(int id) { return repository.topTen(id); }

    @Override
    public List<String> movieRecommend(int id) { return repository.movieRecommend(id); }

    @Override
    public Integer followers(int id) { return repository.followers(id); }

    @Override
    public Integer getFollowing(int id) { return repository.getFollowing(id); }
}
