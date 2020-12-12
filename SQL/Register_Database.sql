CREATE DATABASE  IF NOT EXISTS `registerdatabase`;
USE `registerdatabase`;
--
-- Table structure for table `Ethnicity`
-- Table structure for table `user`

-- Table structure for table `lang`
--


DROP TABLE IF EXISTS `User`;


CREATE TABLE User (
                user_Id INT AUTO_INCREMENT NOT NULL,
                first_Name VARCHAR(45) NOT NULL,
                last_Name VARCHAR(45) NOT NULL,
                email VARCHAR(45) NOT NULL,
                tel_Num VARCHAR(13) NOT NULL,
                zip_Code VARCHAR(12) NOT NULL,
                gender VARCHAR(11) NOT NULL,
                -- hispanic, latino, spanish  
                hls VARCHAR(4) NOT NULL,
                american_Indian boolean NOT NULL,
                asian boolean NOT NULL,
                black boolean NOT NULL,
                pacific boolean NOT NULL,
                white boolean NOT NULL,
                non_Ethnic boolean NOT NULL,
                veteran VARCHAR(4) NOT NULL,
                degree VARCHAR(25) NOT NULL,
                edu VARCHAR(60) NOT NULL,
                grad_Date VARCHAR(11) NOT NULL,
                c_Plus_Plus boolean NOT NULL,
                c_Sharp boolean NOT NULL,
                java boolean NOT NULL,
                javascript boolean NOT NULL,
                python boolean NOT NULL,
                php boolean NOT NULL,
                r boolean NOT NULL,
                ruby boolean NOT NULL,
                swift boolean NOT NULL,
                other boolean NOT NULL,
                no_Lang boolean NOT NULL,
				relocate VARCHAR(10) NOT NULL,
                auth_Work VARCHAR(11) NOT NULL,
				sponsorship VARCHAR(11) NOT NULL,
				start_Date VARCHAR(11) NOT NULL,
                ad VARCHAR (40) NOT NULL,
				referral VARCHAR (40) NOT NULL,
                PRIMARY KEY (user_Id)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


