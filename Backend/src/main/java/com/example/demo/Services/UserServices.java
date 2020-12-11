package com.example.demo.Services;

import com.example.demo.Entity.User;
import com.example.demo.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserServices {
    private final UserRepository userRepository;


    @Autowired
    public UserServices(UserRepository userRepository){this.userRepository = userRepository;}

    @Transactional
    public String saveUser(User user)
    {
        userRepository.save(user);

        return "done";
    }
}
