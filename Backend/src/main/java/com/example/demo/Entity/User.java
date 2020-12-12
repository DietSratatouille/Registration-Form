package com.example.demo.Entity;



import javax.persistence.*;


@Entity
@Table( name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="user_Id")
    private int userID;

    @Column(name = "first_Name")
    private String firstName;

    @Column(name = "last_Name")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "tel_Num")
    private String telephoneNum;

    @Column(name = "zip_Code")
    private String zipcode;

    @Column(name = "gender")
    private String gender;

    @Column(name = "hls")
    private String hls;

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

    @Column(name="non_Ethnic")
    private boolean isNonEthnic;

    @Column(name = "veteran")
    private String veteran;

    @Column(name = "degree")
    private String degree;

    @Column(name = "edu")
    private String edu;

    @Column(name = "grad_Date")
    private String graduationDate;

    @Column(name="c_Plus_Plus")
    private boolean cPlusPlus;

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

    @Column(name="no_Lang")
    private boolean none;

    @Column(name = "relocate")
    private String relocate;

    @Column(name = "auth_Work")
    private String workAuthorization;

    @Column(name = "sponsorship")
    private String sponsorship;

    @Column(name = "start_Date")
    private String startDate;
    
    @Column(name = "ad")
    private String ad;
    
    @Column(name = "referral")
    private String referral;

    @Column(name = "resume_File")
    private String file;

    public User(String firstName, String lastName, String email,
                String telephoneNum, String zipcode, String gender,
                String hls, boolean americanIndian, boolean asian,
                boolean black, boolean pacific, boolean white, boolean isNonEthnic,
                String veteran, String degree, String edu,
                String graduationDate, boolean cPlusPlus, boolean cSharp,
                boolean java, boolean javascript, boolean python,
                boolean php, boolean r, boolean ruby, boolean swift,
                boolean other, boolean none, String relocate,
                String workAuthorization, String sponsorship,
                String startDate, String ad, String referral, String file) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.telephoneNum = telephoneNum;
        this.zipcode = zipcode;
        this.gender = gender;
        this.hls = hls;
        this.americanIndian = americanIndian;
        this.asian = asian;
        this.black = black;
        this.pacific = pacific;
        this.white = white;
        this.isNonEthnic=isNonEthnic;
        this.veteran = veteran;
        this.degree = degree;
        this.edu = edu;
        this.graduationDate = graduationDate;
        this.cPlusPlus = cPlusPlus;
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
        this.relocate = relocate;
        this.workAuthorization = workAuthorization;
        this.sponsorship = sponsorship;
        this.startDate = startDate;
        this.ad = ad;
        this.referral = referral;
        this.file = file;
    }

    public User() {
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelephoneNum() {
        return telephoneNum;
    }

    public void setTelephoneNum(String telephoneNum) {
        this.telephoneNum = telephoneNum;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getHls() {
        return hls;
    }

    public void setHls(String hls) {
        this.hls = hls;
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

    public boolean isNonEthnic() {
        return isNonEthnic;
    }

    public void setNonEthnic(boolean nonEthnic) {
        isNonEthnic = nonEthnic;
    }

    public String getVeteran() {
        return veteran;
    }

    public void setVeteran(String veteran) {
        this.veteran = veteran;
    }

    public String getDegree() {
        return degree;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }

    public String getEdu() {
        return edu;
    }

    public void setEdu(String edu) {
        this.edu = edu;
    }

    public String getGraduationDate() {
        return graduationDate;
    }

    public void setGraduationDate(String graduationDate) {
        this.graduationDate = graduationDate;
    }

    public boolean iscPlusPlus() {
        return cPlusPlus;
    }

    public void setcPlusPlus(boolean cPlusPlus) {
        this.cPlusPlus = cPlusPlus;
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

    public String getRelocate() {
        return relocate;
    }

    public void setRelocate(String relocate) {
        this.relocate = relocate;
    }

    public String getWorkAuthorization() {
        return workAuthorization;
    }

    public void setWorkAuthorization(String workAuthorization) {
        this.workAuthorization = workAuthorization;
    }

    public String getSponsorship() {
        return sponsorship;
    }

    public void setSponsorship(String sponsorship) {
        this.sponsorship = sponsorship;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getAd() {
        return ad;
    }

    public void setAd(String ad) {
        this.ad = ad;
    }

    public String getReferral() {
        return referral;
    }

    public void setReferral(String referral) {
        this.referral = referral;
    }

    public String getFile() {
        return file;
    }

    public void setFile(String file) {
        this.file = file;
    }

    @Override
    public String toString() {
        return "User{" +
                "userID=" + userID +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", telephoneNum='" + telephoneNum + '\'' +
                ", zipcode='" + zipcode + '\'' +
                ", gender='" + gender + '\'' +
                ", hls='" + hls + '\'' +
                ", americanIndian=" + americanIndian +
                ", asian=" + asian +
                ", black=" + black +
                ", pacific=" + pacific +
                ", white=" + white +
                ", isNonEthnic=" + isNonEthnic +
                ", veteran='" + veteran + '\'' +
                ", degree='" + degree + '\'' +
                ", edu='" + edu + '\'' +
                ", graduationDate='" + graduationDate + '\'' +
                ", cPlusPlus=" + cPlusPlus +
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
                ", relocate='" + relocate + '\'' +
                ", workAuthorization='" + workAuthorization + '\'' +
                ", sponsorship='" + sponsorship + '\'' +
                ", startDate='" + startDate + '\'' +
                ", ad='" + ad + '\'' +
                ", referral='" + referral + '\'' +
                ", file='" + file + '\'' +
                '}';
    }
}
