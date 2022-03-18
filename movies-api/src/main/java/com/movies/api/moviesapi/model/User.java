package com.movies.api.moviesapi.model;

import java.util.logging.Logger;

import com.fasterxml.jackson.annotation.JsonProperty;

public class User {
    private static final Logger LOG = Logger.getLogger(User.class.getName());

    static final String STRING_FORMAT = "User [id=%d, name=%s]";

    @JsonProperty("id") private int id;
    @JsonProperty("name") private String name;

    public User(@JsonProperty("id") int id, @JsonProperty("name") String name) {
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
