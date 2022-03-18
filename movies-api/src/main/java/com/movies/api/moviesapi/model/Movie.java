package com.movies.api.moviesapi.model;

import java.util.logging.Logger;

import com.fasterxml.jackson.annotation.JsonProperty;
/**
 * Represents a Product entity
 * 
 * @author Team 1
 */
public class Movie {
    private static final Logger LOG = Logger.getLogger(Movie.class.getName());

    static final String STRING_FORMAT = "Movie [id=%d, name=%s]";

    @JsonProperty("id") private int id;
    @JsonProperty("name") private String name;

    public Movie(@JsonProperty("id") int id, @JsonProperty("name") String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {return id;}

    public void setName(String name) {this.name = name;}

    public String getName() {return name;}

    @Override
    public String toString() {
        return String.format(STRING_FORMAT,id,name);
    }
}
