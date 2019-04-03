package com.deadduck.Project2MUSICAPP.bean;

import java.util.Objects;
import javax.persistence.*;


@Entity
@Table(name = "transaction")
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="transaction_id")
    private int transaction_id;

    @Column(name="credit_card_no")
    private String credit_card_no;

    @Column(name="exp_month")
    private int exp_month;

    @Column(name="exp_year")
    private int exp_year;

    @Column(name="cvv")
    private int cvv;

    @Column(name="user_id")
    private int user_id;

    public Transaction() {

    }

    public int getTransaction_id() {
        return transaction_id;
    }

    public void setTransaction_id(int transaction_id) {
        this.transaction_id = transaction_id;
    }

    public String getCredit_card_no() {
        return credit_card_no;
    }

    public void setCredit_card_no(String credit_card_no) {
        this.credit_card_no = credit_card_no;
    }

    public int getExp_month() {
        return exp_month;
    }

    public void setExp_month(int exp_month) {
        this.exp_month = exp_month;
    }

    public int getExp_year() {
        return exp_year;
    }

    public void setExp_year(int exp_year) {
        this.exp_year = exp_year;
    }

    public int getCvv() {
        return cvv;
    }

    public void setCvv(int cvv) {
        this.cvv = cvv;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    @Override
    public String toString() {
        return "Transaction{" +
                "transaction_id=" + transaction_id +
                ", credit_card_no='" + credit_card_no + '\'' +
                ", exp_month=" + exp_month +
                ", exp_year=" + exp_year +
                ", cvv=" + cvv +
                ", user_id=" + user_id +
                '}';
    }
}
