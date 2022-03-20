package com.movies.api.moviesapi.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.movies.api.moviesapi.model.Movie;
import com.movies.api.moviesapi.persistence.MovieDAO;


@RestController
@RequestMapping("movies")
public class MovieController {
    private static final Logger LOG = Logger.getLogger(MovieController.class.getName());
    private MovieDAO movieDao;

    public MovieController(MovieDAO movieDao) {
        this.movieDao = movieDao;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Movie> getMovie(@PathVariable int id) {
        LOG.info("GET /movies/" + id);
        try {
            Movie movie = movieDao.getMovie(id);
            if (movie != null)
                return new ResponseEntity<Movie>(movie,HttpStatus.OK);
            else
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        catch(IOException e) {
            LOG.log(Level.SEVERE,e.getLocalizedMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("")
    public ResponseEntity<Movie[]> getMovies() {
        LOG.info("GET /movies");

        // Replace below with your implementation
        try{
            Movie movie[] = movieDao.getMovies();
            if(movie != null){
                return new ResponseEntity<Movie[]>(movie,HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch(IOException e) {
            LOG.log(Level.SEVERE,e.getLocalizedMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/")
    public ResponseEntity<Movie[]> searchMovies(@RequestParam String name) {
        LOG.info("GET /movies/?name="+name);

        // Replace below with your implementation
        try{
            Movie movie[] = movieDao.searchMovies(name);
            if(movie != null){
                return new ResponseEntity<Movie[]>(movie,HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch(IOException e){
            LOG.log(Level.SEVERE,e.getLocalizedMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("")
    public ResponseEntity<Movie> createMovie(@RequestBody Movie movie) {
        LOG.info("POST /movies " + movie);

        // Replace below with your implementation
        try{
            movie = movieDao.createMovie(movie);
            if(movie != null){
                return new ResponseEntity<Movie>(movie,HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch(Exception e) {
            LOG.log(Level.SEVERE,e.getLocalizedMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("")
    public ResponseEntity<Movie> updateMovie(@RequestBody Movie movie) {
        LOG.info("PUT /movies " + movie);

        // Replace below with your implementation
        try{
            movie = movieDao.updateMovie(movie);
            if(movie != null){
                return new ResponseEntity<Movie>(movie,HttpStatus.OK);
            }else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch(Exception e) {
        LOG.log(Level.SEVERE,e.getLocalizedMessage());
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Movie> deleteMovie(@PathVariable int id) {
        LOG.info("DELETE /movies/" + id);

        // Replace below with your implementation
        try{
            if(movieDao.deleteMovie(id)){
                return new ResponseEntity<>(HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch(Exception e) {
            LOG.log(Level.SEVERE,e.getLocalizedMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}