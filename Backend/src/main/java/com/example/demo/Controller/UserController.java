package com.example.demo.Controller;

import com.example.demo.Entity.User;
import com.example.demo.Repository.UserRepository;
import com.example.demo.Send.PDFLoader;
import com.example.demo.Services.UserServices;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.FileNotFoundException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Scanner;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
//@RequestMapping("/user")
public class UserController {
    private final UserServices userServices;
    private final UserRepository userRepository;

    public UserController(UserServices userServices, UserRepository userRepository)
    {
        this.userServices = userServices;
        this.userRepository = userRepository;
    }

    @GetMapping("/listUsers")
    public List<User> userList(){
        return userServices.userList();
    }

    @GetMapping("findByID/{id}")
    public Optional<User> findById(@PathVariable int id){

        return userServices.findById(id);
    }

    @GetMapping("/school")
    public List<String> getSchools() throws FileNotFoundException {
        File schools = new File(System.getProperty("user.dir")+"\\src\\main\\resources\\Schools.txt");
        Scanner scan = new Scanner(schools);
        List<String> school = new ArrayList<>();
        while (scan.hasNextLine())
        {

            school.add(scan.nextLine());
        }
        return school;
    }
    @GetMapping("/major")
    public List<String> getMajor() throws FileNotFoundException {
        File majors = new File(System.getProperty("user.dir")+"\\src\\main\\resources\\Major.txt");
        Scanner scan = new Scanner(majors);
        List<String> major = new ArrayList<>();
        while (scan.hasNextLine())
        {

            major.add(scan.nextLine());
        }
        return major;
    }
    @GetMapping("/state")
    public List<String> getState() throws FileNotFoundException {
        File majors = new File(System.getProperty("user.dir")+"\\src\\main\\resources\\States.txt");
        Scanner scan = new Scanner(majors);
        List<String> states = new ArrayList<>();
        while (scan.hasNextLine())
        {

            states.add(scan.nextLine());
        }
        return states;
    }

    @PostMapping("/create")
    public String createUser(@RequestBody User user) throws InterruptedException {
//        PDFLoader pdf = new PDFLoader(user.getFirstName(),user.getLastName());
//        pdf.loadPDF();
        //SendFileEmail f = new SendFileEmail(user.getFirstName(),user.getLastName());


          return userServices.saveUser(user);
    }
    @RequestMapping(value = "file", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    @PostMapping("/fileDownload")
    public void createPDF(@RequestBody File file) throws InterruptedException {
        System.out.println(file.getName());
//        PDFLoader pdf = new PDFLoader(user.getFirstName(),user.getLastName());
//        pdf.loadPDF();
        //SendFileEmail f = new SendFileEmail(user.getFirstName(),user.getLastName());



    }

    @DeleteMapping("/deleteById/{id}")
    public String deleteById(@PathVariable int id){
        try {
            userServices.deleteById(id);
            System.out.println("Success");
        } catch (RuntimeException runtimeException){
            System.out.println("Could NOT ");
        }

        return "Success";
    }

}
