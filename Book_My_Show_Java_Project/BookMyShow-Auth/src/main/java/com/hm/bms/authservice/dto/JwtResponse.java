package com.hm.bms.authservice.dto;

import com.hm.bms.authservice.model.User;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class JwtResponse {
	
	private String jwtToken;
	private User user;

}
