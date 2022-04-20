package com.movies.api.moviesapi.controller;
import com.movies.api.moviesapi.model.Movie;
import com.movies.api.moviesapi.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
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

    @GetMapping("/{id}")
    public Optional<Movie> getMovie(@PathVariable int id) {
        LOG.info("GET /movie/" + id);
        return movieService.getMovie(id);
    }

    @GetMapping("/popularMovies")
    public List<String> popularMovies() {
        LOG.info("GET /movies/popularMovies");
        return movieService.popularMovies();
    }

    @GetMapping("/newReleases")
    public List<String> newReleases() {
        LOG.info("GET /movies/newReleases");
        return movieService.newReleases();
    }

    @DeleteMapping("/{id}")
    public boolean deleteMovie(@PathVariable int id) {
        LOG.info("DELETE /movie/" + id);
        return movieService.deleteMovie(id);
    }

    @GetMapping("/amongstFriends/{id}")
    public List<String> amongstFriend(@PathVariable int id) {
        LOG.info("GET /movies/amongstFriends/" + id);
        return movieService.amongstFriends(id);
    }

    @GetMapping("/topTen/{id}")
    public List<String> top10(@PathVariable int id) {
        LOG.info("GET /movies/topTen/" + id);
        return movieService.topTen(id);
    }
}
