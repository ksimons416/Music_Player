package com.deadduck.Project2MUSICAPP.Data;

import com.deadduck.Project2MUSICAPP.bean.User;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;

@Repository
public class UserDaoImp implements UserDao {

    private EntityManager entityManager;

    public UserDaoImp(EntityManager theEntityManager) {
        this.entityManager = theEntityManager;
    }


    @Override
    public void addUser(User theUser) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.save(theUser);
    }
}
