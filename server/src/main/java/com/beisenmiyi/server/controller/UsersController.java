package com.beisenmiyi.server.controller;

import com.beisenmiyi.server.entity.UserDTO;
import com.beisenmiyi.server.entity.UsersEntity;
import com.beisenmiyi.server.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UsersController {

    @Autowired
    private UsersService usersService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UsersEntity user) {
        UsersEntity userEntity = usersService.login(user);
        if (userEntity != null) {
            return new ResponseEntity<>(userEntity.getUserid(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
        }
    }

    @PostMapping("/resetPassword")
    public ResponseEntity<Boolean> resetPassword(@RequestBody UsersEntity user) {
        return usersService.resetPassword(user) ? new ResponseEntity<>(true, HttpStatus.OK) : new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
    }

    @PostMapping("/register")
    public ResponseEntity<Boolean> register(@RequestBody UsersEntity user) {
        return usersService.register(user) ? new ResponseEntity<>(true, HttpStatus.OK) : new ResponseEntity<>(false, HttpStatus.CONFLICT);
    }

    @GetMapping("/getUser")
    public ResponseEntity<UserDTO> getUser(@RequestParam String username) {
        UserDTO user = usersService.getUser(username);
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }
}
