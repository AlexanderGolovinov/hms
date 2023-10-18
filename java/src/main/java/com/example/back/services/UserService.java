package com.example.back.services;

import com.example.back.entity.User;
import com.example.back.repositories.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User saveUserData(User user) {
        return userRepository.save(user);
    }

    public Optional<User>  getUserById(Long userId) {
        return userRepository.findById(userId);
    }

    public User updateUser(User user) {
        Optional<User> userOptional = userRepository.findById(user.getId());
        if (userOptional.isPresent()) {
            User existingUser = userOptional.get();
            existingUser.setName(user.getName());
            existingUser.setSectors(user.getSectors());
            existingUser.setAgreeToTerms(user.getAgreeToTerms());
            return userRepository.save(existingUser);
        } else {
            throw new EntityNotFoundException("User not found with id " + user.getId());
        }
    }
}
