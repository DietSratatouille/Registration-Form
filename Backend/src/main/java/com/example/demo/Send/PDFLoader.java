package com.example.demo.Send;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;

public class PDFLoader {
    String firstName;
    String lastName;
    String fileName;

    public PDFLoader(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fileName = firstName+" "+lastName+"'s resume.pdf";
    }
    public void loadPDF()
    {
        try {
            PDDocument doc = new PDDocument();
            doc.addPage(new PDPage());
            doc.save("C:\\Users\\Edward Cochran\\Documents\\"+fileName);
            System.out.println("PDF created");
            doc.close();
        }
        catch (Exception e){e.printStackTrace();}
        
    }
}
