package com.hm.bms.authservice.service;

import com.hm.bms.authservice.model.User;

public interface UserService {

	public User registerNewUser(User user);
	
	public User getUserByUsername(String username);
	
	public User saveUser(User user);
	
	public void initRolesAndUser();
	
	public String getEncodedPassword(String password);
	
	
	
}
