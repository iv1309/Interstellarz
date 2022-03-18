package com.movies.api.moviesapi.persistence;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Map;
import java.util.TreeMap;
import java.util.logging.Logger;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.movies.api.moviesapi.model.Movie;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/**
 * Implements the functionality for JSON file-based peristance for Products
 * 
 * {@literal @}Component Spring annotation instantiates a single instance of this
 * class and injects the instance into other classes as needed
 * 
 * @author Team 1
 */
@Component
public class MovieFileDAO implements MovieDAO{
    private static final Logger LOG = Logger.getLogger(MovieFileDAO.class.getName());
    Map<Integer,Movie> movies;   // Provides a local cache of the hero objects
                                // so that we don't need to read from the file
                                // each time
    private ObjectMapper objectMapper;  // Provides conversion between Hero
                                        // objects and JSON text format written
                                        // to the file
    private static int nextId;  // The next Id to assign to a new hero
    private String filename;    // Filename to read from and write to

    public MovieFileDAO(@Value("${products.file}") String filename,ObjectMapper objectMapper) throws IOException {
        this.filename = filename;
        this.objectMapper = objectMapper;
        load();  // load the heroes from the file
    }

    private synchronized static int nextId() {
        int id = nextId;
        ++nextId;
        return id;
    }

    private Movie[] getMoviesArray() {
        return getMoviesArray(null);
    }

    private Movie[] getMoviesArray(String containsText) { // if containsText == null, no filter
        ArrayList<Movie> movieArrayList = new ArrayList<>();

        for (Movie movie : movies.values()) {
            if (containsText == null || movie.getName().contains(containsText)) {
                movieArrayList.add(movie);
            }
        }

        Movie[] movieArray = new Movie[movieArrayList.size()];
        movieArrayList.toArray(movieArray);
        return movieArray;
    }

    private boolean save() throws IOException {
        Movie[] movieArray = getMoviesArray();

        // Serializes the Java Objects to JSON objects into the file
        // writeValue will thrown an IOException if there is an issue
        // with the file or reading from the file
        objectMapper.writeValue(new File(filename),movieArray);
        return true;
    }

    private boolean load() throws IOException {
        movies = new TreeMap<>();
        nextId = 0;

        // Deserializes the JSON objects from the file into an array of heroes
        // readValue will throw an IOException if there's an issue with the file
        // or reading from the file
        Movie[] movieArray = objectMapper.readValue(new File(filename),Movie[].class);

        // Add each hero to the tree map and keep track of the greatest id
        for (Movie movie : movieArray) {
            movies.put(movie.getId(),movie);
            if (movie.getId() > nextId)
                nextId = movie.getId();
        }
        // Make the next id one greater than the maximum from the file
        ++nextId;
        return true;
    }

    /**
    ** {@inheritDoc}
     */
    @Override
    public Movie[] getMovies() {
        synchronized(movies) {
            return getMoviesArray();
        }
    }

    /**
    ** {@inheritDoc}
     */
    @Override
    public Movie[] findMovies(String containsText) {
        synchronized(movies) {
            return getMoviesArray(containsText);
        }
    }

    /**
    ** {@inheritDoc}
     */
    @Override
    public Movie getMovie(int id) {
        synchronized(movies) {
            if (movies.containsKey(id))
                return movies.get(id);
            else
                return null;
        }
    }

    /**
    ** {@inheritDoc}
     */
    @Override
    public Movie createMovie(Movie movie) throws IOException {
        synchronized(movies) {
            // We create a new hero object because the id field is immutable
            // and we need to assign the next unique id
            Movie newMovie = new Movie(nextId(),movie.getName());
            movies.put(newMovie.getId(),newMovie);
            save(); // may throw an IOException
            return newMovie;
        }
    }

    /**
    ** {@inheritDoc}
     */
    @Override
    public Movie updateMovie(Movie movie) throws IOException {
        synchronized(movies) {
            if (movies.containsKey(movie.getId()) == false)
                return null;  // hero does not exist

            movies.put(movie.getId(),movie);
            save(); // may throw an IOException
            return movie;
        }
    }

    /**
    ** {@inheritDoc}
     */
    @Override
    public boolean deleteMovie(int id) throws IOException {
        synchronized(movies) {
            if (movies.containsKey(id)) {
                movies.remove(id);
                return save();
            }
            else
                return false;
        }
    }
}
