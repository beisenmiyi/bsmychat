package com.beisenmiyi.server.service;

import com.beisenmiyi.server.entity.UserDTO;
import com.beisenmiyi.server.entity.UsersEntity;
import com.beisenmiyi.server.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
public class UsersService {

    @Autowired
    private UsersRepository usersRepository;

    public UsersEntity login(UsersEntity user) {
        UsersEntity usersEntity = usersRepository.findByUsername(user.getUsername());
        if (usersEntity != null && usersEntity.getPassword().equals(user.getPassword())) {
            return usersEntity;
        } else {
            return null;
        }
    }

    public boolean resetPassword(UsersEntity user) {
        UsersEntity usersEntity = usersRepository.findByUsername(user.getUsername());
        if (usersEntity != null) {
            usersEntity.setPassword(user.getPassword());
            usersRepository.save(usersEntity);
            return true;
        } else {
            return false;
        }
    }

    public boolean register(UsersEntity user) {
        UsersEntity usersEntity = usersRepository.findByUsername(user.getUsername());
        if (usersEntity == null) {
            //设置userid
            user.setUserid(setUserid());
            user.setNickname(user.getUsername());
            usersRepository.save(user);
            return true;
        } else {
            return false;
        }
    }

    public String setUserid() {
        Instant now = Instant.now();
        String epochSecond = String.valueOf(now.getEpochSecond());
        String nano = String.valueOf(now.getNano());

        return epochSecond + nano;
    }

    public UserDTO getUser(String username) {
        UsersEntity usersEntity = usersRepository.findByUsername(username);
        return usersEntity == null ? null : new UserDTO(usersEntity.getUsername(), usersEntity.getNickname());
    }
}