package com.beisenmiyi.server.service;

import com.beisenmiyi.server.entity.UsersEntity;
import com.beisenmiyi.server.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsersService {

    @Autowired
    private UsersRepository usersRepository;

    public UsersEntity login(UsersEntity user) {
        UsersEntity usersEntity = usersRepository.findByUsername(user.getUsername());
        if(usersEntity != null && usersEntity.getPassword().equals(user.getPassword())) {
            return usersEntity;
        } else {
            return null;
        }
    }

    public boolean resetPassword(UsersEntity user) {
        UsersEntity usersEntity = usersRepository.findByUsername(user.getUsername());
        if(usersEntity != null) {
            usersEntity.setPassword(user.getPassword());
            usersRepository.save(usersEntity);
            return true;
        } else {
            return false;
        }
    }
}
