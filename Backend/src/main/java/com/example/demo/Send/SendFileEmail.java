package com.example.demo.Send;


import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.FileDataSource;
import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import java.util.Map;
import java.util.Properties;

public class SendFileEmail {
    String name;
    String fileName;


        public SendFileEmail(String first,String last){
            name= first+" "+last;
            fileName=name+" resume";
        }

        public SendFileEmail(String first,String last, String fileName){
            name= first+" "+last;
            this.fileName=fileName;
        }
        public void sendEmail() {
            // Recipient's email ID needs to be mentioned.
            String to = "sterlingtyson97@gmail.com";

            // Sender's email ID needs to be mentioned
            String from = "sterling.edward2020@gmail.com";

            // Assuming you are sending email from localhost
            String host = "smtp.gmail.com";

            // Get system properties
            Properties properties = System.getProperties();

            // Setup mail server
            properties.setProperty("mail.smtp.host", host);
            properties.setProperty("mail.smtp.port", "465");
            properties.put("mail.smtp.ssl.enable", "true");
            properties.put("mail.smtp.auth", "true");

            Map<String,String> env=System.getenv();
            //TODO make sure able to be hosted on site
            // Get the default Session object.
            Session session = Session.getInstance(properties, new Authenticator() {
                @Override
                protected PasswordAuthentication getPasswordAuthentication() {
                    return new PasswordAuthentication(from,env.get("appKey"));
                }
            });

            try {
                // Create a default MimeMessage object.
                MimeMessage message = new MimeMessage(session);

                // Set From: header field of the header.
                message.setFrom(new InternetAddress(from));

                // Set To: header field of the header.
                message.addRecipient(Message.RecipientType.TO,new InternetAddress(to));

                // Set Subject: header field
                message.setSubject(name+"'s resume");

                // Create the message part
                BodyPart messageBodyPart = new MimeBodyPart();

                // Fill the message
                messageBodyPart.setText("This is "+name+"'s resume");

                // Create a multipart message
                Multipart multipart = new MimeMultipart();

                // Set text message part
                multipart.addBodyPart(messageBodyPart);

                // Part two is attachment
                messageBodyPart = new MimeBodyPart();

                DataSource source = new FileDataSource(fileName);
                messageBodyPart.setDataHandler(new DataHandler(source));
                messageBodyPart.setFileName(fileName);
                multipart.addBodyPart(messageBodyPart);

                // Send the complete message parts
                message.setContent(multipart );

                // Send message
                Transport.send(message);
                System.out.println("Sent message successfully....");
            } catch (MessagingException mex) {
                mex.printStackTrace();
            }
        }
    }

