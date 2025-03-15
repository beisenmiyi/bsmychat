package com.beisenmiyi.server.repository;

import com.beisenmiyi.server.entity.UsersEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository<UsersEntity, String> {

    UsersEntity findByUsername(String username);
}
