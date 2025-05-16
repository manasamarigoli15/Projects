package com.hm.bms.authservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.hm.bms.authservice.dto.JwtResponse;
import com.hm.bms.authservice.dto.JwtToken;
import com.hm.bms.authservice.dto.UserCredentials;
import com.hm.bms.authservice.exception.InvalidCredentialsException;
import com.hm.bms.authservice.model.User;
import com.hm.bms.authservice.repository.UserRepository;
import com.hm.bms.authservice.util.JwtUtil;
import com.netflix.discovery.converters.Auto;

@Service
public class UserAuthService {

	@Autowired
	private UserRepository repo;
	@Autowired
	RestTemplate rt;
	@Autowired
	private JwtUtil jwtUtil;

	@Autowired
	private PasswordEncoder passwordEncoder;

	private User user;

	public JwtResponse validateCredentials(UserCredentials credentials) {

//		System.out.println(credentials);
		User user = repo.findUserByUsername(credentials.getUsername());
		if(user==null)
			throw new InvalidCredentialsException("Incorrect Username");
		if (!passwordEncoder.matches(credentials.getPassword(), user.getPassword())) {
			throw new InvalidCredentialsException("Incorrect Password");
		}
		String jwt = jwtUtil.generateJwt(user.getUsername());
		return new JwtResponse(jwt, user);

	}

	public User returnUser(String username) {
		if (!repo.existsByUsername(username)) {
			throw new InvalidCredentialsException("No user with such username");
		}
		return repo.findUserByUsername(username);
	}

}
