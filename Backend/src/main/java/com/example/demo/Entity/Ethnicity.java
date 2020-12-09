package com.example.demo.Entity;

import javax.persistence.*;

@Entity
@Table(name = "ethnicity")
public class Ethnicity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="eth_Id")
    private int ethID;

    @Column(name="user_Id")
    private int userID;

    @Column(name="american_Indian")
    private boolean americanIndian;
    
    @Column(name="asian")
    private boolean asian;
    
    @Column(name="black")
    private boolean black;
    
    @Column(name="pacific")
    private boolean pacific;
    
    @Column(name="white")
    private boolean white;

    public Ethnicity(int userID, boolean americanIndian, boolean asian, 
                     boolean black, boolean pacific, boolean white) {
        this.userID = userID;
        this.americanIndian = americanIndian;
        this.asian = asian;
        this.black = black;
        this.pacific = pacific;
        this.white = white;
    }

    public Ethnicity() {
    }

    public int getEthID() {
        return ethID;
    }

    public void setEthID(int ethID) {
        this.ethID = ethID;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public boolean isAmericanIndian() {
        return americanIndian;
    }

    public void setAmericanIndian(boolean americanIndian) {
        this.americanIndian = americanIndian;
    }

    public boolean isAsian() {
        return asian;
    }

    public void setAsian(boolean asian) {
        this.asian = asian;
    }

    public boolean isBlack() {
        return black;
    }

    public void setBlack(boolean black) {
        this.black = black;
    }

    public boolean isPacific() {
        return pacific;
    }

    public void setPacific(boolean pacific) {
        this.pacific = pacific;
    }

    public boolean isWhite() {
        return white;
    }

    public void setWhite(boolean white) {
        this.white = white;
    }
    
    
}
