package com.movies.api.moviesapi.persistence;

import java.io.IOException;

import com.movies.api.moviesapi.model.Collection;
import com.movies.api.moviesapi.model.Movie;

public interface CollectionDAO {

    Collection[] getCollections() throws IOException;

    Collection[] findCollections(String containsText) throws IOException;

    Collection getCollection(int id) throws IOException;

    Collection createCollection(Collection collection) throws IOException;

    Collection updateCollection(Collection collection) throws IOException;

    boolean deleteCollection(int id) throws IOException;

    Movie[] getMoviesInCollection(int id) throws IOException;

    public Movie[] deleteMovieInCollection(int id, Movie[] movies) throws IOException;

}
