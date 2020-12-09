package com.example.demo.Entity;

import javax.persistence.*;

@Entity
@Table(name = "lang")
public class lang {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="lang_Id")
    private int langID;
    
    @Column(name="user_Id")
    private int userID;
    
    @Column(name="c_Plus")
    private boolean cPlus;
    
    @Column(name="c_Sharp")
    private boolean cSharp;
    
    @Column(name="java")
    private boolean java;
    
    @Column(name="javascript")
    private boolean javascript;
    
    @Column(name="python")
    private boolean python;
    
    @Column(name="php")
    private boolean php;
    
    @Column(name="r")
    private boolean r;
    
    @Column(name="ruby")
    private boolean ruby;
    
    @Column(name="swift")
    private boolean swift;
    
    @Column(name="other")
    private boolean other;
    
    @Column(name="none")
    private boolean none;

    public lang(int userID, boolean cPlus, boolean cSharp, boolean java, boolean javascript,
                boolean python, boolean php, boolean r, boolean ruby, boolean swift, 
                boolean other, boolean none) {
        this.userID = userID;
        this.cPlus = cPlus;
        this.cSharp = cSharp;
        this.java = java;
        this.javascript = javascript;
        this.python = python;
        this.php = php;
        this.r = r;
        this.ruby = ruby;
        this.swift = swift;
        this.other = other;
        this.none = none;
    }

    public lang() {
    }

    public int getLangID() {
        return langID;
    }

    public void setLangID(int langID) {
        this.langID = langID;
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public boolean iscPlus() {
        return cPlus;
    }

    public void setcPlus(boolean cPlus) {
        this.cPlus = cPlus;
    }

    public boolean iscSharp() {
        return cSharp;
    }

    public void setcSharp(boolean cSharp) {
        this.cSharp = cSharp;
    }

    public boolean isJava() {
        return java;
    }

    public void setJava(boolean java) {
        this.java = java;
    }

    public boolean isJavascript() {
        return javascript;
    }

    public void setJavascript(boolean javascript) {
        this.javascript = javascript;
    }

    public boolean isPython() {
        return python;
    }

    public void setPython(boolean python) {
        this.python = python;
    }

    public boolean isPhp() {
        return php;
    }

    public void setPhp(boolean php) {
        this.php = php;
    }

    public boolean isR() {
        return r;
    }

    public void setR(boolean r) {
        this.r = r;
    }

    public boolean isRuby() {
        return ruby;
    }

    public void setRuby(boolean ruby) {
        this.ruby = ruby;
    }

    public boolean isSwift() {
        return swift;
    }

    public void setSwift(boolean swift) {
        this.swift = swift;
    }

    public boolean isOther() {
        return other;
    }

    public void setOther(boolean other) {
        this.other = other;
    }

    public boolean isNone() {
        return none;
    }

    public void setNone(boolean none) {
        this.none = none;
    }

    @Override
    public String toString() {
        return "lang{" +
                "langID=" + langID +
                ", userID=" + userID +
                ", cPlus=" + cPlus +
                ", cSharp=" + cSharp +
                ", java=" + java +
                ", javascript=" + javascript +
                ", python=" + python +
                ", php=" + php +
                ", r=" + r +
                ", ruby=" + ruby +
                ", swift=" + swift +
                ", other=" + other +
                ", none=" + none +
                '}';
    }
}
