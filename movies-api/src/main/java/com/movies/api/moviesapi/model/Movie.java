package com.movies.api.moviesapi.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "movie")
public class Movie {

    static final String STRING_FORMAT = "Movie [id=%d, name=%s]";

    @Id
    @Column(name = "movieid")
    public int movieID;

    @Column(name = "moviename")
    public String movieName;

    @Column(name = "date")
    public String releaseDate;

    @Column(name = "length")
    public String length;

    @Column(name = "mpaarating")
    public String MPAARating;

    @Column(name = "bechdeltest")
    public int bechdelTest;

    @Column(name = "imdbrating")
    public Float IMDBRating;

    @Column(name = "genre")
    public String genre;

    @Column(name = "name")
    public String cast;

    public Movie() {}

    public Movie(int movieID, String movieName, String releaseDate,
                 String length, String MPAARating, int bechdelTest, Float IMDBRating, String genre, String cast) {
        this.movieID = movieID;
        this.movieName = movieName;
        this.releaseDate = releaseDate;
        this.length = length;
        this.MPAARating = MPAARating;
        this.bechdelTest = bechdelTest;
        this.IMDBRating = IMDBRating;
        this.genre = genre;
        this.cast = cast;
    }

    public int getId() { return movieID; }

    public String getName() { return movieName; }

    public String getLength() { return length; }

    public String getReleaseDate() { return releaseDate; }

    public String getGenre() { return genre; }

    public String getCastMembers() {return cast; }

    @Override
    public String toString() { return String.format(STRING_FORMAT, movieID, movieName); }
}

