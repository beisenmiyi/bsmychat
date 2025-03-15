package com.beisenmiyi.server.service;

import com.beisenmiyi.server.entity.UsersEntity;
import com.beisenmiyi.server.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsersService {

    @Autowired
    private UsersRepository usersRepository;

    public boolean login(UsersEntity user) {
        UsersEntity usersEntity = usersRepository.findByUsername(user.getUsername());
        return usersEntity != null && usersEntity.getPassword().equals(user.getPassword());
    }
}
