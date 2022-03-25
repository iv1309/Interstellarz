package com.movies.api.moviesapi.model;

import java.util.logging.Logger;

import com.fasterxml.jackson.annotation.JsonProperty;

public class User {
    private static final Logger LOG = Logger.getLogger(User.class.getName());

    static final String STRING_FORMAT = "User [id=%d, name=%s]";

    @JsonProperty("id") private int id;
    @JsonProperty("username") private String username;
    @JsonProperty("password") private String password;
    @JsonProperty("firstname") private String firstname;
    @JsonProperty("lastname") private String lastname;
    @JsonProperty("token") private String token;
    @JsonProperty("collections") private Collection[] collections;

    public User(@JsonProperty("id") int id, @JsonProperty("name") String name) {
        this.id = id;
        this.username = name;
    }

    public int getId() {return id;}

    public void setName(String name) {this.username = name;}

    public String getName() {return username;}

    @Override
    public String toString() {
        return String.format(STRING_FORMAT,id, username);
    }
}
