package com.example.demo.Services;

import com.example.demo.Entity.User;
import com.example.demo.Repository.UserRepository;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.io.File;
import java.util.List;
import java.util.Optional;
import java.util.Scanner;

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

    @Transactional
    public List<User> userList(){
         
        return userRepository.findAll();
    }

    @Transactional
    public Optional<User> findById(int id){
        return userRepository.findById(id);
    }

    @Transactional
    public String deleteById(int id){
        userRepository.deleteById(id);
        return "Deleted user with id: " + id;
    }


}
