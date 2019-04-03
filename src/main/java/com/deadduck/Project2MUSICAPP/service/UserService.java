
package com.deadduck.Project2MUSICAPP.service;

import com.deadduck.Project2MUSICAPP.Data.UserDao;
import com.deadduck.Project2MUSICAPP.bean.User;
import com.deadduck.Project2MUSICAPP.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UserService implements IUserService{

    private UserRepository userRepository;
    private UserDao userDao;

    @Autowired
    public UserService(UserRepository userRepository, UserDao theUserDao){
        this.userRepository = userRepository;
        userDao = theUserDao;
    }

    @Transactional(readOnly = true)
    public List <User> getAllUsers(){
        return this.userRepository.findAll();
    }

//    @Transactional
//    public User authenticateUser(String email, String password){
//        return this.userRepository.authentica(email, password);
//    }

    @Transactional
    @Override
    public User findUserByEmailAndPassword(String email, String password){
        User user;
        user = this.userRepository.findByEmailAndPassword(email, password);
        return user;
    }

    @Override
    @Transactional
    public void addUser(User theUser) {
        userDao.addUser(theUser);
    }

    @Override
    public List <User> findAll() {
        return null;
    }
}

