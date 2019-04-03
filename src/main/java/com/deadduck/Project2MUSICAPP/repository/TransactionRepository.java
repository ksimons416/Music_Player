package com.deadduck.Project2MUSICAPP.repository;

import com.deadduck.Project2MUSICAPP.bean.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface TransactionRepository extends JpaRepository<Transaction, Integer> {

}
