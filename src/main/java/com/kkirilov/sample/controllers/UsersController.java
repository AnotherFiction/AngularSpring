package com.kkirilov.sample.controllers;

import com.google.common.collect.Lists;
import com.kkirilov.sample.models.User;
import com.kkirilov.sample.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.TransactionSystemException;
import org.springframework.web.bind.annotation.*;

import javax.validation.ConstraintViolationException;
import java.util.HashMap;
import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE;
import static org.springframework.web.bind.annotation.RequestMethod.*;

@RestController
@RequestMapping(value = "/api/users", produces = APPLICATION_JSON_UTF8_VALUE)
public class UsersController {
    @Autowired
    private UserRepository userRepository;

    @RequestMapping(method = RequestMethod.GET)
    public List<User> index() {
        return Lists.newArrayList(userRepository.findAll());
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<User> create(@RequestBody User user) {
        userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = GET)
    public User show(@PathVariable Long id) {
        return userRepository.findOne(id);
    }

    @RequestMapping(value = "/{id}", method = POST)
    public ResponseEntity<User> update(@PathVariable Long id,
                                       @RequestBody User user) {

        final User updatedUser = userRepository.findOne(id);

        if (user.getFirstName() != null) {
            updatedUser.setFirstName(user.getFirstName());
        }
        if (user.getLastName() != null) {
            updatedUser.setLastName(user.getLastName());
        }
        if (user.getEmail() != null) {
            updatedUser.setEmail(user.getEmail());
        }
        if (user.getDateOfBirth() != null) {
            updatedUser.setDateOfBirth(user.getDateOfBirth());
        }

        userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = DELETE)
    public void destroy(@PathVariable Long id) {
        userRepository.delete(id);
    }

    @ExceptionHandler({TransactionSystemException.class,
            DataIntegrityViolationException.class,
            ConstraintViolationException.class})
    private ResponseEntity handleValidationException(Exception e) {
        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(new HashMap<String, Object>() {
                    {
                        //XXX: why there are no human readable messages
                        put("error", e.getMessage());
                    }
                });
    }
}
