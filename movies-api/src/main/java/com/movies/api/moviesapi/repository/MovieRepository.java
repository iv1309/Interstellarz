package com.movies.api.moviesapi.repository;

import com.movies.api.moviesapi.model.Movie;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MovieRepository extends CrudRepository<Movie, Integer> {

    <S extends Movie> S save(S entity);

    <S extends Movie> Iterable<S> saveAll(Iterable<S> entities);

    @Query(value = "SELECT \n" +
            "mov.\"movieID\", \n" +
            "mov.\"movieName\", \n" +
            "mov.\"date\", \n" +
            "mov.\"length\", \n" +
            "mov.\"MPAARating\", \n" +
            "mov.\"bechdelTest\", \n" +
            "mov.\"imdbRating\",\n" +
            "gen.\"genre\"\n" +
            "FROM p320_04.movie mov, p320_04.genre gen, p320_04.movie_genre genmov\n" +
            "WHERE mov.\"movieID\" = genmov.\"movieID\" AND gen.\"genreID\" = genmov.\"genreID\" AND mov.\"movieID\" = ?1", nativeQuery = true)
    Optional<Movie> findById(Integer integer);

    boolean existsById(Integer integer);

    @Query(value = "SELECT \n" +
            "mov.\"movieID\", \n" +
            "mov.\"movieName\", \n" +
            "mov.\"date\", \n" +
            "mov.\"length\", \n" +
            "mov.\"MPAARating\", \n" +
            "mov.\"bechdelTest\", \n" +
            "mov.\"imdbRating\",\n" +
            "gen.\"genre\"\n" +
            "FROM p320_04.movie mov, p320_04.genre gen, p320_04.movie_genre genmov\n" +
            "WHERE mov.\"movieID\" = genmov.\"movieID\" AND gen.\"genreID\" = genmov.\"genreID\"", nativeQuery = true)
    List<Movie> findAll();

    Iterable<Movie> findAllById(Iterable<Integer> integers);

    long count();

    void deleteById(Integer integer);

    void delete(Movie entity);

    void deleteAllById(Iterable<? extends Integer> integers);

    void deleteAll(Iterable<? extends Movie> entities);

    void deleteAll();
}

