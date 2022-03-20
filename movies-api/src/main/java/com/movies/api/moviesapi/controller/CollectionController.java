package com.movies.api.moviesapi.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.movies.api.moviesapi.model.Collection;
import com.movies.api.moviesapi.model.Movie;
import com.movies.api.moviesapi.persistence.CollectionDAO;
import com.movies.api.moviesapi.persistence.MovieDAO;


@RestController
@RequestMapping("collections")
public class CollectionController {
    private static final Logger LOG = Logger.getLogger(CollectionController.class.getName());
    private CollectionDAO collectionDao;
    private MovieDAO movieDao;

    public CollectionController(CollectionDAO collectionDao) {
        this.collectionDao = collectionDao;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Collection> getCollection(@PathVariable int id) {
        LOG.info("GET /collections/" + id);
        try {
            Collection collection = collectionDao.getCollection(id);
            if (collection != null)
                return new ResponseEntity<Collection>(collection,HttpStatus.OK);
            else
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        catch(IOException e) {
            LOG.log(Level.SEVERE,e.getLocalizedMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("")
    public ResponseEntity<Collection[]> getCollections() {
        LOG.info("GET /collections");

        // Replace below with your implementation
        try{
            Collection collection[] = collectionDao.getCollections();
            if(collection != null){
                return new ResponseEntity<Collection[]>(collection,HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch(IOException e) {
            LOG.log(Level.SEVERE,e.getLocalizedMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/")
    public ResponseEntity<Collection[]> searchCollections(@RequestParam String name) {
        LOG.info("GET /collections/?name="+name);

        // Replace below with your implementation
        try{
            Collection collection[] = collectionDao.findCollections(name);
            if(collection != null){
                return new ResponseEntity<Collection[]>(collection,HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch(IOException e){
            LOG.log(Level.SEVERE,e.getLocalizedMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PostMapping("")
    public ResponseEntity<Collection> createCollection(@RequestBody Collection collection) {
        LOG.info("POST /collections " + collection);

        // Replace below with your implementation
        try{
            collection = collectionDao.createCollection(collection);
            if(collection != null){
                return new ResponseEntity<Collection>(collection,HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch(Exception e) {
            LOG.log(Level.SEVERE,e.getLocalizedMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    

    @PutMapping("")
    public ResponseEntity<Collection> updateCollection(@RequestBody Collection collection) {
        LOG.info("PUT /collections " + collection);

        // Replace below with your implementation
        try{
            collection = collectionDao.updateCollection(collection);
            if(collection != null){
                return new ResponseEntity<Collection>(collection,HttpStatus.OK);
            }else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch(Exception e) {
        LOG.log(Level.SEVERE,e.getLocalizedMessage());
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Collection> deleteCollection(@PathVariable int id) {
        LOG.info("DELETE /collections/" + id);

        // Replace below with your implementation
        try{
            if(collectionDao.deleteCollection(id)){
                return new ResponseEntity<>(HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch(Exception e) {
            LOG.log(Level.SEVERE,e.getLocalizedMessage());
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}