package com.hm.bms.dto;





import lombok.Data;

@Data

public class User {

	
	private int userId;
	
	private String username;
	
	private String email;
	
	private String password;

	private Role role;

}
