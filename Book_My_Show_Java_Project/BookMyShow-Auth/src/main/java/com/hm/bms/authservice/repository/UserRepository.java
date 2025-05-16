package com.hm.bms.authservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.hm.bms.authservice.model.User;

public interface UserRepository extends JpaRepository<User, Integer>{

	public User findUserByUsername(String username);
	
	
	public boolean existsByUsername(String username);
	
	public boolean existsByEmail(String email);
	
}
