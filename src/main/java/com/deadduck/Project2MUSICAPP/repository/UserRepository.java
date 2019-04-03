package com.deadduck.Project2MUSICAPP.repository;

import com.deadduck.Project2MUSICAPP.bean.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer> {

    User findByEmailAndPassword(String username, String password);
}

