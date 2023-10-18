package com.example.back.services;

import com.example.back.entity.User;
import com.example.back.repositories.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

public class UserServiceTest {

    @InjectMocks
    private UserService userService;

    @Mock
    private UserRepository userRepository;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void saveUserData() {
        User user = new User();
        when(userRepository.save(user)).thenReturn(user);
        User savedUser = userService.saveUserData(user);
        assertEquals(user, savedUser);
        verify(userRepository).save(user);
    }

    @Test
    void getUserById_found() {
        Long userId = 1L;
        User user = new User();
        when(userRepository.findById(userId)).thenReturn(Optional.of(user));
        Optional<User> result = userService.getUserById(userId);
        assertTrue(result.isPresent());
        assertEquals(user, result.get());
    }

    @Test
    void getUserById_notFound() {
        Long userId = 1L;
        when(userRepository.findById(userId)).thenReturn(Optional.empty());
        Optional<User> result = userService.getUserById(userId);
        assertFalse(result.isPresent());
    }

    @Test
    void updateUser_success() {
        User user = new User();
        user.setId(1L);
        when(userRepository.findById(user.getId())).thenReturn(Optional.of(user));
        when(userRepository.save(user)).thenReturn(user);
        User updatedUser = userService.updateUser(user);
        assertEquals(user, updatedUser);
    }

    @Test
    void updateUser_throwsAnError() {
        User user = new User();
        user.setId(1L);
        when(userRepository.findById(user.getId())).thenReturn(Optional.empty());
        assertThrows(EntityNotFoundException.class, () -> userService.updateUser(user));
    }


}
