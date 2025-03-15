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
public class UsersController {

    @Autowired
    private UsersService usersService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UsersEntity user) {
        if (usersService.login(user)) {
            return new ResponseEntity<>("登录成功", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("登录失败", HttpStatus.UNAUTHORIZED);
        }
    }
}
