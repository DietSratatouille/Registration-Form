package com.example.demo.Send;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;

import java.io.File;

public class PDFLoader {
    String firstName;
    String lastName;
    String fileName;
    String currDir;
    File file;

    public PDFLoader(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fileName = firstName+" "+lastName+"'s resume.pdf";
        currDir=System.getProperty("user.home") + "\\Desktop\\";
    }

    public PDFLoader(File file){
        this.file = file;
        //this.fileName= file.getName();
        currDir=System.getProperty("user.home") + "\\Desktop\\";
    }

    public void loadPDF()
    {
        try {
            PDDocument doc = new PDDocument();
            doc.addPage(new PDPage());
            //doc.save(currDir+fileName);
            //doc.save(currDir+file);
            
            System.out.println("PDF created");
            doc.close();
        }
        catch (Exception e){e.printStackTrace();}
        
    }
}
