package com.movies.api.moviesapi.persistence;

import java.io.File;
import java.io.IOException;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Map;
import java.util.TreeMap;
import java.util.logging.Logger;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.movies.api.moviesapi.model.Collection;
import com.movies.api.moviesapi.model.Movie;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/**
 * Implements the functionality for JSON file-based peristance for Products
 * 
 * {@literal @}Component Spring annotation instantiates a single instance of this
 * class and injects the instance into other classes as needed
 * 
 * @author Team 1
 */
@Component
public class CollectionFileDAO implements CollectionDAO{
    private static final Logger LOG = Logger.getLogger(CollectionFileDAO.class.getName());
    Map<Integer,Collection> collections;   // Provides a local cache of the hero objects
    Map<Integer, Movie> movies;
                                // so that we don't need to read from the file
                                // each time
    private ObjectMapper objectMapper;  // Provides conversion between Hero
                                        // objects and JSON text format written
                                        // to the file
    private static int nextId;  // The next Id to assign to a new hero
    private String filename="data/collections.json";;    // Filename to read from and write to

    public CollectionFileDAO(ObjectMapper objectMapper) throws IOException {
        this.objectMapper = objectMapper;
        load();  // load the heroes from the file
    }

    private synchronized static int nextId() {
        int id = nextId;
        ++nextId;
        return id;
    }

    private Collection[] getCollectionsArray() {
        return getCollectionsArray(null);
    }

    private Collection[] getCollectionsArray(String containsText) { // if containsText == null, no filter
        ArrayList<Collection> collectionArrayList = new ArrayList<>();

        for (Collection collection : collections.values()) {
            if (containsText == null || collection.getName().contains(containsText)) {
                collectionArrayList.add(collection);
            }
        }

        Collection[] collectionArray = new Collection[collectionArrayList.size()];
        collectionArrayList.toArray(collectionArray);
        return collectionArray;
    }

    private boolean save() throws IOException {
        Collection[] collectionArray = getCollectionsArray();

        // Serializes the Java Objects to JSON objects into the file
        // writeValue will thrown an IOException if there is an issue
        // with the file or reading from the file
        objectMapper.writeValue(new File(filename),collectionArray);
        return true;
    }

    private boolean load() throws IOException {
        collections = new TreeMap<>();
        nextId = 0;

        // Deserializes the JSON objects from the file into an array of heroes
        // readValue will throw an IOException if there's an issue with the file
        // or reading from the file
        Collection[] collectionArray = objectMapper.readValue(new File(filename),Collection[].class);

        // Add each hero to the tree map and keep track of the greatest id
        for (Collection collection : collectionArray) {
            collections.put(collection.getId(),collection);
            if (collection.getId() > nextId)
                nextId = collection.getId();
        }
        // Make the next id one greater than the maximum from the file
        ++nextId;
        return true;
    }

    /**
    ** {@inheritDoc}
     */
    @Override
    public Collection[] getCollections() {
        synchronized(collections) {
            return getCollectionsArray();
        }
    }

    /**
    ** {@inheritDoc}
     */
    @Override
    public Collection[] findCollections(String containsText) {
        synchronized(collections) {
            return getCollectionsArray(containsText);
        }
    }

    /**
    ** {@inheritDoc}
     */
    @Override
    public Collection getCollection(int id) {
        synchronized(collections) {
            if (collections.containsKey(id))
                return collections.get(id);
            else
                return null;
        }
    }

    /**
    ** {@inheritDoc}
     */
    @Override
    public Collection createCollection(Collection collection) throws IOException {
        synchronized(collections) {
            // We create a new hero object because the id field is immutable
            // and we need to assign the next unique id
            Movie[] movies = collection.getMoviesInCollection();
            int size = 0;
            if(movies != null){
                size = movies.length;
            }
            Collection newCollection = new Collection(nextId(),collection.getName(), movies, size, collection.getLength());
            collections.put(newCollection.getId(),newCollection);
            save(); // may throw an IOException
            return newCollection;
        }
    }

    /**
    ** {@inheritDoc}
     */
    @Override
    public Collection updateCollection(Collection collection) throws IOException {
        synchronized(collections) {
            if (collections.containsKey(collection.getId()) == false)
                return null;  // hero does not exist

            collections.put(collection.getId(),collection);
            save(); // may throw an IOException
            return collection;
        }
    }

    /**
    ** {@inheritDoc}
     */
    @Override
    public boolean deleteCollection(int id) throws IOException {
        synchronized(collections) {
            if (collections.containsKey(id)) {
                collections.remove(id);
                return save();
            }
            else
                return false;
        }
    }

    /**
    ** {@inheritDoc}
     */
    @Override
    public Movie[] getMoviesInCollection(int id) throws IOException{
        synchronized(collections) {
            if (collections.containsKey(id))
                return collections.get(id).getMoviesInCollection();
            else
                return null;
        }
    }

}

