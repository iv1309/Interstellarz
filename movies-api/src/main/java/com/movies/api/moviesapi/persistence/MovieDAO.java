package com.movies.api.moviesapi.persistence;

import java.io.IOException;

import com.movies.api.moviesapi.model.Movie;

public interface MovieDAO {

    Movie[] getMovies() throws IOException;

    Movie[] searchMovies(String containsText) throws IOException;

    Movie getMovie(int id) throws IOException;

    Movie createMovie(Movie movie) throws IOException;

    Movie updateMovie(Movie movie) throws IOException;

    boolean deleteMovie(int id) throws IOException;

}
