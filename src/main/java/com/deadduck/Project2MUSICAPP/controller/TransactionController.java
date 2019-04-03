package com.deadduck.Project2MUSICAPP.controller;

import com.deadduck.Project2MUSICAPP.bean.Transaction;
import com.deadduck.Project2MUSICAPP.repository.TransactionRepository;

import com.deadduck.Project2MUSICAPP.service.ITransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(path = "/login")
public class TransactionController {


    private ITransactionService transactionService;

    @Autowired
    public TransactionController(ITransactionService theTransctionService){
        transactionService = theTransctionService;
    }

    @PostMapping("/creditcard")
    public Transaction createTransaction(@RequestBody Transaction theTransaction){
        theTransaction.setTransaction_id(0);
        System.out.println("Creating transaction...");
        transactionService.createTransaction(theTransaction);
        return theTransaction;
    }

}
