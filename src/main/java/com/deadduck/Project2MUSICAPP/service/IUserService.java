package com.deadduck.Project2MUSICAPP.service;
import com.deadduck.Project2MUSICAPP.bean.User;

import java.util.List;

public interface IUserService {

    public List<User> findAll();
    User findUserByEmailAndPassword(String email, String password);
    public void addUser(User theUser);
}




