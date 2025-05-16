package com.hm.bms.authservice.controller;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hm.bms.authservice.dto.JwtResponse;
import com.hm.bms.authservice.dto.JwtToken;
import com.hm.bms.authservice.dto.UserCredentials;
import com.hm.bms.authservice.model.User;
import com.hm.bms.authservice.service.UserAuthService;
import com.hm.bms.authservice.service.UserService;
import com.hm.bms.authservice.service.UserServiceImpl;


@RestController
@RequestMapping("/auth/public")
//@CrossOrigin(origins="http://localhost:4200/")
public class UserAuthenticationController {
	
	@Autowired
	private UserService service;
	
	@Autowired
	private UserAuthService authService;
	
//	@PostConstruct
//	public void initRolesAndUsers() {
//		service.initRolesAndUser();
//	}
	

	@PostMapping("/registerNewUser")
	public User addUser(@RequestBody User user) {
		return service.registerNewUser(user);
	}
	
	@PostMapping("/authenticate")
	public JwtResponse login(@RequestBody UserCredentials credentials) {
		return authService.validateCredentials(credentials);
	}
	
	
	
}
