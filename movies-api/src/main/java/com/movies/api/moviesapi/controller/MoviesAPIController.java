package com.movies.api.moviesapi.controller;
import com.movies.api.moviesapi.model.Movie;
import com.movies.api.moviesapi.repository.MovieRepository;
import com.movies.api.moviesapi.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

@RestController()
@RequestMapping("movies")
public class MoviesAPIController {
    private static final Logger LOG = Logger.getLogger(MoviesAPIController.class.getName());

    @Autowired
    MovieService movieService;

    @GetMapping("")
    public List<Movie> getMovies() {
        LOG.info("GET /movies");
        return movieService.getMovies();
    }
}
