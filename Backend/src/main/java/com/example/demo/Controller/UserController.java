package com.example.demo.Controller;

import com.example.demo.Entity.User;
import com.example.demo.Repository.UserRepository;
import com.example.demo.Services.UserServices;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/create")
    public String createUser(@RequestBody User user) throws InterruptedException {

          return userServices.saveUser(user);
    }

    
}
