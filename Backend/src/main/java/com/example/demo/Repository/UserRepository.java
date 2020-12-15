package com.example.demo.Repository;

import com.example.demo.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
//public interface UserRepository extends JpaRepository<User,Long> {
//}
public interface UserRepository extends JpaRepository<User,Integer> {
}
