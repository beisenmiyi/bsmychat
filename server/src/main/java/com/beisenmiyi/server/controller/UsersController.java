package com.beisenmiyi.server.controller;

import com.beisenmiyi.server.entity.UsersEntity;
import com.beisenmiyi.server.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UsersController {

    @Autowired
    private UsersService usersService;

    @PostMapping("/login")
    public ResponseEntity<Long> login(@RequestBody UsersEntity user) {
        UsersEntity userEntity = usersService.login(user);
        if (userEntity != null) {
//            System.out.println(userEntity.getUserid());
            return new ResponseEntity<>(userEntity.getUserid(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(null, HttpStatus.UNAUTHORIZED);
        }
    }

    @PostMapping("/resetPassword")
    public ResponseEntity<Boolean> resetPassword(@RequestBody UsersEntity user) {
        if (usersService.resetPassword(user)) {
            return new ResponseEntity<>(true, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(false, HttpStatus.NOT_FOUND);
        }
    }
}
