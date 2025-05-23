package com.hm.bms.authservice.service;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.hm.bms.authservice.exception.InvalidCredentialsException;
import com.hm.bms.authservice.model.Role;
import com.hm.bms.authservice.model.User;
import com.hm.bms.authservice.repository.RoleRepository;
import com.hm.bms.authservice.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository repo;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private RoleRepository roleRepository;

	@Override
	public User getUserByUsername(String username) {
		return repo.findUserByUsername(username);
	}

	@Override
	public User registerNewUser(User user) {

		if (repo.existsByUsername(user.getUsername())) {
			throw new InvalidCredentialsException("Username Taken");
		}
		
		if(repo.existsByEmail(user.getEmail())) {
			throw new InvalidCredentialsException("Email Taken");
		}

		user.setRole(roleRepository.findById("User").get());

		user.setPassword(getEncodedPassword(user.getPassword()));

		return repo.save(user);
	}

	@Override
	public User saveUser(User user) {

		String password = user.getPassword();
		String encodedPassword = passwordEncoder.encode(password);
		user.setPassword(encodedPassword);
		user.setRole(roleRepository.findById("User").get());
		return repo.save(user);
	}

	public void initRolesAndUser() {
		Role adminRole = new Role();
		adminRole.setRoleName("Admin");
		adminRole.setRoleDescription("Admin role");
		roleRepository.save(adminRole);

		Role userRole = new Role();
		userRole.setRoleName("User");
		userRole.setRoleDescription("Default role for newly created record");
		roleRepository.save(userRole);

		User adminUser = new User();
		adminUser.setUsername("admin");
		adminUser.setEmail("admin@gmail.com");
		adminUser.setPassword(getEncodedPassword("Admin@123"));

//		Set<Role> adminRoles = new HashSet<>();
//		adminRoles.add(adminRole);
		adminUser.setRole(adminRole);
		repo.save(adminUser);

	}

	public String getEncodedPassword(String password) {
		return passwordEncoder.encode(password);
	}

}
