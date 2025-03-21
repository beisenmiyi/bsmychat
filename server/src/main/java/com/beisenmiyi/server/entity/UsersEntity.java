package com.beisenmiyi.server.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class UsersEntity {

    @Id
    private String userid;
    private String username;
    private String password;
    private String nickname;

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = String.valueOf(userid);
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }
}
