package com.movies.api.moviesapi.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "movie")

public class Movie {

    static final String STRING_FORMAT = "Movie [id=%d, name=%s]";

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "movieID")
    public int movieID;

    @Column(name = "movieName")
    public String movieName;

    @Column(name = "releaseDate")
    public String releaseDate;

    @Column(name = "length")
    public String length;

    @Column(name = "MPAARating")
    public String MPAARating;

    @Column(name = "bechdelTest")
    public int bechdelTest;

    public Movie() {}

    public Movie(int movieID, String movieName, String length, String MPAARating, int bechdelTest) {
        this.movieID = movieID;
        this.movieName = movieName;
        this.length = length;
        this.MPAARating = MPAARating;
        this.bechdelTest = bechdelTest;
    }

    public int getId() { return movieID; }

    public String getName() { return movieName; }

    public String getLength() { return length; }

    public String getReleaseDate() { return releaseDate; }

    @Override
    public String toString() { return String.format(STRING_FORMAT,movieID,movieName); }
}

