package com.deadduck.Project2MUSICAPP.service;


import com.deadduck.Project2MUSICAPP.Data.TransactionDao;
import com.deadduck.Project2MUSICAPP.bean.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class TransactionServiceImp implements ITransactionService {

    private TransactionDao transactionDao;

    @Autowired
    public TransactionServiceImp(TransactionDao theTransactionDao){
        transactionDao = theTransactionDao;
    }

    @Override
    @Transactional
    public void createTransaction(Transaction transaction) {
        transactionDao.createTransaction(transaction);
    }
}
