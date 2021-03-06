package com.movies.api.moviesapi.model;

import java.util.logging.Logger;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Collection {
    private static final Logger LOG = Logger.getLogger(Collection.class.getName());

    static final String STRING_FORMAT = "Collection [id=%d, name=%s]";

    @JsonProperty("id") private int id;
    @JsonProperty("name") private String name;
    @JsonProperty("array") private Movie[] array;
    @JsonProperty("size") private Number size;
    @JsonProperty("length") private Number length;

    public Collection(@JsonProperty("id") int id, @JsonProperty("name") String name, @JsonProperty("array") Movie[] array, @JsonProperty("size") Number size, @JsonProperty("length") Number length) {
        this.id = id;
        this.name = name;
        this.array = array;
        this.size = size;
        this.length = length;
    }

    public int getId() {return id;}

    public void setName(String name) {this.name = name;}

    public String getName() {return name;}

    public Movie[] getMoviesInCollection() {return array;}

    public Number getCollectionSize() {return size;}

    public void setSize(Number size) {this.size = size;}

    public Number getLength() {return length;} 

    public void setLength(Number length) {this.length = length;}
    
    @Override
    public String toString() {
        return String.format(STRING_FORMAT,id,name);
    }
}
