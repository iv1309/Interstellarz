package com.movies.api.moviesapi.model;

import java.util.logging.Logger;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Movie {
    private static final Logger LOG = Logger.getLogger(Movie.class.getName());

    static final String STRING_FORMAT = "Movie [id=%d, name=%s]";

    @JsonProperty("id") private int id;
    @JsonProperty("name") private String name;
    @JsonProperty("releaseDate") private String releaseDate;
    @JsonProperty("castMembers") private String castMembers;
    @JsonProperty("studio") private String studio;
    @JsonProperty("genre") private String genre;
    @JsonProperty("rate") private int rate;
    @JsonProperty("watched") private Boolean watched;
    @JsonProperty("length") private int length;

    public Movie(@JsonProperty("id") int id, @JsonProperty("name") String name, @JsonProperty("releaseDate") String releaseDate, @JsonProperty("castMembers") String castMembers, @JsonProperty("studio") String studio, @JsonProperty("genre") String genre, @JsonProperty("rate") int rate,
    @JsonProperty("watched") Boolean watched, @JsonProperty("length") int length) {
        this.id = id;
        this.name = name;
        this.releaseDate = releaseDate;
        this.castMembers = castMembers;
        this.studio = studio;
        this.genre = genre;
        this.rate = rate;
        this.watched  = watched;
        this.length = length;
    }

    public int getId() {return id;}

    public void setName(String name) {this.name = name;}

    public String getName() {return name;}

    public String getReleaseDate() {return releaseDate;}

    public String getCastMembers() {return castMembers;}

    public String getStudio() {return studio;}

    public String getGenre() {return genre;}

    public int getRate() {return rate;}

    public Boolean getWatched() {return watched;}

    public int getLength() {return length;}

    @Override
    public String toString() {
        return String.format(STRING_FORMAT,id,name);
    }
}

