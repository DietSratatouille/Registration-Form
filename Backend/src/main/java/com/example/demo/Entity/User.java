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
    private String first;

    @Column(name = "last_Name")
    private String last;

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



    @Column(name = "veteran")
    private String veteran;

    @Column(name = "degree")
    private String degree;

    @Column(name = "edu")
    private String edu;

    @Column(name = "grad_Date")
    private String gradDate;



    @Column(name = "relocate")
    private String relocate;

    @Column(name = "auth_Work")
    private String auth;

    @Column(name = "sponsorship")
    private String sponsorship;

    @Column(name = "start_Date")
    private String startDate;
    
    @Column(name = "ad")
    private String ad;
    
    @Column(name = "referral")
    private String referral;

    public User(String first, String last, String email, String telephoneNum,
                String zipcode, String gender, String hls,
                String veteran, String degree, String edu, String gradDate,
                String relocate, String auth, String sponsorship,
                String startDate, String ad, String referral) {
        this.first = first;
        this.last = last;
        this.email = email;
        this.telephoneNum = telephoneNum;
        this.zipcode = zipcode;
        this.gender = gender;
        this.hls = hls;

        this.veteran = veteran;
        this.degree = degree;
        this.edu = edu;
        this.gradDate = gradDate;

        this.relocate = relocate;
        this.auth = auth;
        this.sponsorship = sponsorship;
        this.startDate = startDate;
        this.ad = ad;
        this.referral = referral;
    }

    public User() {
    }

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public String getFirst() {
        return first;
    }

    public void setFirst(String first) {
        this.first = first;
    }

    public String getLast() {
        return last;
    }

    public void setLast(String last) {
        this.last = last;
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

    public String getGradDate() {
        return gradDate;
    }

    public void setGradDate(String gradDate) {
        this.gradDate = gradDate;
    }

    public String getRelocate() {
        return relocate;
    }

    public void setRelocate(String relocate) {
        this.relocate = relocate;
    }

    public String getAuth() {
        return auth;
    }

    public void setAuth(String auth) {
        this.auth = auth;
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

    @Override
    public String toString() {
        return "User{" +
                "userID=" + userID +
                ", first='" + first + '\'' +
                ", last='" + last + '\'' +
                ", email='" + email + '\'' +
                ", telephoneNum='" + telephoneNum + '\'' +
                ", zipcode='" + zipcode + '\'' +
                ", gender='" + gender + '\'' +
                ", hls='" + hls + '\'' +
                ", veteran='" + veteran + '\'' +
                ", degree='" + degree + '\'' +
                ", edu='" + edu + '\'' +
                ", gradDate='" + gradDate + '\'' +
                ", relocate='" + relocate + '\'' +
                ", auth='" + auth + '\'' +
                ", sponsorship='" + sponsorship + '\'' +
                ", startDate='" + startDate + '\'' +
                ", ad='" + ad + '\'' +
                ", referral='" + referral + '\'' +
                '}';
    }
}
