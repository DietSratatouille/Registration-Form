CREATE DATABASE  IF NOT EXISTS `registerdatabase`;
USE `registerdatabase`;
--
-- Table structure for table `Ethnicity`
-- Table structure for table `user`

-- Table structure for table `lang`
--

DROP TABLE IF EXISTS `lang`;
DROP TABLE IF EXISTS `Ethnicity`;
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
                ethnicity INT NOT NULL,
                veteran VARCHAR(4) NOT NULL,
                highest_Degree VARCHAR(4) NOT NULL,
                edu VARCHAR(40) NOT NULL,
                grad_Date VARCHAR(11) NOT NULL,
                programming_Languages INT  NOT NULL,
				relocate VARCHAR(10) NOT NULL,
                auth_Work VARCHAR(11) NOT NULL,
				sponsorship VARCHAR(11) NOT NULL,
				start_Date VARCHAR(11) NOT NULL,
                ad VARCHAR (40) NOT NULL,
				referral VARCHAR (40) NOT NULL,
                PRIMARY KEY (user_Id)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


CREATE TABLE Ethnicity (
                eth_Id INT AUTO_INCREMENT NOT NULL,
                user_Id INT NOT NULL,
                american_Indian VARCHAR(4) NOT NULL,
                asian VARCHAR(4) NOT NULL,
                black VARCHAR(4) NOT NULL,
                pacific VARCHAR(4) NOT NULL,
                white VARCHAR(4) NOT NULL,
                PRIMARY KEY (eth_Id, user_Id)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


CREATE TABLE lang (
                lang_Id INT AUTO_INCREMENT NOT NULL,
                user_Id INT NOT NULL,
                c_Plus VARCHAR(4) NOT NULL,
                c_Sharp VARCHAR(4) NOT NULL,
                java VARCHAR(4) NOT NULL,
                javascript VARCHAR(4) NOT NULL,
                python VARCHAR(4) NOT NULL,
                php VARCHAR(4) NOT NULL,
                r VARCHAR(4) NOT NULL,
                ruby VARCHAR(4) NOT NULL,
                swift VARCHAR(4) NOT NULL,
                other VARCHAR(4) NOT NULL,
                none VARCHAR(4) NOT NULL,
                PRIMARY KEY (lang_Id, user_Id)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


ALTER TABLE Ethnicity ADD CONSTRAINT ethnicity_user_fk
FOREIGN KEY (user_Id)
REFERENCES User (user_Id)
ON DELETE NO ACTION
ON UPDATE NO ACTION;

ALTER TABLE lang ADD CONSTRAINT lang_user_fk
FOREIGN KEY (user_Id)
REFERENCES User (user_Id)
ON DELETE NO ACTION
ON UPDATE NO ACTION;