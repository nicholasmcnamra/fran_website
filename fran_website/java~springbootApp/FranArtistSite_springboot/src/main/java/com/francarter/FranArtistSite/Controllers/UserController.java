package com.francarter.FranArtistSite.Controllers;

import com.francarter.FranArtistSite.Entities.User;
import com.francarter.FranArtistSite.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {
    private UserService userService;
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }
    @GetMapping("/user/{id}")
    public ResponseEntity<User> show(@PathVariable Long id) {
        return new ResponseEntity<>(userService.show(id), HttpStatus.OK);
    }
    @PostMapping("/user")
    public ResponseEntity<User> create(@RequestBody User user) {
        return new ResponseEntity<>(userService.create(user), HttpStatus.OK);
    }
    @PutMapping("/user/{id}")
    public ResponseEntity<User> update(@PathVariable Long id, @RequestBody User user) {
        return new ResponseEntity<>(userService.update(id, user), HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable Long id) {
        return new ResponseEntity<>(userService.delete(id), HttpStatus.OK);
    }
}
