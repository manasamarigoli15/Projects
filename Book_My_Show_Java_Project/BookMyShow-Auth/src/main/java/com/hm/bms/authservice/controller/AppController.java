package com.hm.bms.authservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hm.bms.authservice.dto.Message;
import com.hm.bms.authservice.model.User;
import com.hm.bms.authservice.service.UserAuthService;

@RestController
@RequestMapping("/auth")
public class AppController {
	
	@Autowired
	UserAuthService service;
	
	
	@GetMapping("/public")
	public Message sayHelloWorld() {
		return new Message("Hello World");
	}

	@GetMapping("/user")
	public Message sayHelloUser() {
		return new Message("Hello User");
	}
	
	@GetMapping("/admin")
	public Message sayHelloAdmin() {
		System.out.println("Hello");
		return new Message("Hello Admin");
	}
	@GetMapping("/login")
	public Message userlogin() {
		return new Message("our things");
	}
	
	@GetMapping("/userDetails/{username}")
	public User getUserDetails(@PathVariable String username) {
		System.out.println(username);
		return service.returnUser(username);
	}
}
