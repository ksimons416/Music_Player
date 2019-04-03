package com.deadduck.Project2MUSICAPP.Data;

import com.deadduck.Project2MUSICAPP.bean.Transaction;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
public class TransactionDaoImp implements TransactionDao{


    private EntityManager entityManager;

    @Autowired
    public TransactionDaoImp(EntityManager theEntityManager) {
        entityManager = theEntityManager;
    }

    @Override
    public void createTransaction(Transaction Transaction) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.save(Transaction);
    }
}

