package com.hm.bms.authservice.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.hm.bms.authservice.model.Role;
import com.hm.bms.authservice.model.User;
import com.hm.bms.authservice.repository.RoleRepository;
import com.hm.bms.authservice.repository.UserRepository;

@ExtendWith(MockitoExtension.class)
class UserServiceImplTest {

	@InjectMocks
	UserServiceImpl service;

	@Mock
	UserRepository repo;

	@Mock
	RoleRepository roleRepository;

	User user;
	Role role;

	@BeforeEach
	void setUp() {
		role = new Role("User", "Basic User Role");
		user = new User(1, "niranjan", "n@gmail.com", "Root1234", role);
	}

	@Test
	void testGetUserByUsername() {
		when(repo.findUserByUsername("niranjan")).thenReturn(user);
		assertEquals(user, service.getUserByUsername("niranjan"));
	}
}
