package com.movies.api.moviesapi.repository;

import com.movies.api.moviesapi.model.Movie;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.lang.annotation.Repeatable;
import java.util.List;
import java.util.Optional;

@Repository
public interface MovieRepository extends CrudRepository<Movie, Integer> {

    <S extends Movie> S save(S entity);

    <S extends Movie> Iterable<S> saveAll(Iterable<S> entities);

    @Query(value = "SELECT DISTINCT\n" +
            "mov.\"movieID\", \n" +
            "mov.\"movieName\", \n" +
            "mov.\"date\", \n" +
            "mov.\"length\", \n" +
            "mov.\"MPAARating\", \n" +
            "mov.\"bechdelTest\", \n" +
            "mov.\"imdbRating\",\n" +
            "gen.\"genre\",\n" +
            "cst.\"name\"\n" +
            "FROM p320_04.movie mov, p320_04.genre gen, p320_04.movie_genre genmov, \n" +
            "p320_04.cast cst, p320_04.movie_cast cstmov\n" +
            "WHERE mov.\"movieID\" = genmov.\"movieID\" AND gen.\"genreID\" = genmov.\"genreID\" AND\n" +
            "mov.\"movieID\" = cstmov.\"movieID\" AND cst.\"castMemberID\" = cstmov.\"castMemberID\"\n" +
            "AND mov.\"movieID\" = ?1", nativeQuery = true)
    Optional<Movie> findById(Integer integer);

    boolean existsById(Integer integer);

    @Query(value = "SELECT DISTINCT \n" +
            "mov.\"movieID\", \n" +
            "mov.\"movieName\", \n" +
            "mov.\"date\", \n" +
            "mov.\"length\", \n" +
            "mov.\"MPAARating\", \n" +
            "mov.\"bechdelTest\", \n" +
            "mov.\"imdbRating\",\n" +
            "gen.\"genre\",\n" +
            "cst.\"name\"\n" +
            "FROM p320_04.movie mov, p320_04.genre gen, p320_04.movie_genre genmov, \n" +
            "p320_04.cast cst, p320_04.movie_cast cstmov\n" +
            "WHERE mov.\"movieID\" = genmov.\"movieID\" AND gen.\"genreID\" = genmov.\"genreID\" AND\n" +
            "mov.\"movieID\" = cstmov.\"movieID\" AND cst.\"castMemberID\" = cstmov.\"castMemberID\"",
            nativeQuery = true)
    List<Movie> findAll();

    Iterable<Movie> findAllById(Iterable<Integer> integers);

    long count();

    @Query(value = "DELETE FROM p320_04.movie WHERE \"movieID\" = ?1", nativeQuery = true)
    void deleteMovieById(Integer integer);

    @Query(value = "DELETE FROM p320_04.movie_studio WHERE \"movieID\" = ?1", nativeQuery = true)
    void deleteStudioById(Integer integer);

    @Query(value = "DELETE FROM p320_04.movie_cast WHERE \"movieID\" = ?1", nativeQuery = true)
    void deleteCastById(Integer integer);

    @Query(value = "DELETE FROM p320_04.movie_genre WHERE \"movieID\" = ?1", nativeQuery = true)
    void deleteGenreById(Integer integer);

    @Query(value = "DELETE FROM p320_04.movie_director WHERE \"movieID\" = ?1", nativeQuery = true)
    void deleteDirectorById(Integer integer);

    void delete(Movie entity);

    void deleteAllById(Iterable<? extends Integer> integers);

    void deleteAll(Iterable<? extends Movie> entities);

    void deleteAll();

    @Query(value = "SELECT m.\"movieName\" FROM p320_04.movie m\n" +
            "INNER JOIN p320_04.watched w\n" +
            "ON m.\"movieID\" = w.\"movieID\"\n" +
            "WHERE w.\"datePlayed\" BETWEEN NOW() - INTERVAL '3 MONTH' AND NOW()\n" +
            "GROUP BY m.\"movieName\"\n" +
            "ORDER BY COUNT(*) DESC\n" +
            "LIMIT 20\n", nativeQuery = true)
    List<String> popularMovies();

    @Query(value = "SELECT\n" +
            "m.\"movieName\"\n" +
            "FROM p320_04.movie m\n" +
            "WHERE EXTRACT(MONTH FROM DATE(m.date)) = EXTRACT(MONTH FROM NOW())\n" +
            "AND m.\"imdbRating\" IS NOT NULL\n" +
            "ORDER BY m.\"imdbRating\" DESC\n" +
            "LIMIT 5\n", nativeQuery = true)
    List<String> newReleases();


    @Query(value = "SELECT m.\"movieName\" FROM p320_04.movie m\n" +
            "INNER JOIN p320_04.watched w ON m.\"movieID\" = w.\"movieID\"\n" +
            "INNER JOIN p320_04.follow f ON f.\"followID\" = w.\"userID\"\n" +
            "WHERE f.\"userID\" = ?1\n" +
            "GROUP BY m.\"movieName\"\n" +
            "ORDER BY COUNT(*) DESC\n" +
            "LIMIT 20\n", nativeQuery = true)
    List<String> amongstFriends(Integer integer);

    @Query(value = "SELECT m.\"movieName\" FROM p320_04.movie m INNER JOIN p320_04.watched w\n" +
            "ON m.\"movieID\" = w.\"movieID\"\n" +
            "WHERE w.\"userID\" = ?1\n" +
            "ORDER BY m.\"imdbRating\" DESC\n" +
            "LIMIT 10", nativeQuery = true)
    List<String> topTen(Integer integer);

    @Query(value = "SELECT \"movieName\" FROM p320_04.movie m WHERE \"movieID\" NOT IN (SELECT \"movieID\" FROM p320_04.watched WHERE \"userID\" = ?1)\n" +
            "AND \"bechdelTest\" = 3 AND \"imdbRating\" IS NOT NULL ORDER BY \"imdbRating\" DESC LIMIT 5", nativeQuery = true)
    List<String> movieRecommend(Integer integer);

    @Query(value = "SELECT COUNT(*) FROM p320_04.follow WHERE \"userID\" = ?1", nativeQuery = true)
    Integer followers(Integer integer);

    @Query(value = "SELECT COUNT(*) FROM p320_04.follow WHERE \"followerID\" = ?1", nativeQuery = true)
    Integer getFollowing(Integer integer);
}

