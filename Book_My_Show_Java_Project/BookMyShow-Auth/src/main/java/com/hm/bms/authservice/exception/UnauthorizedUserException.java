package com.hm.bms.authservice.exception;

public class UnauthorizedUserException extends RuntimeException {
	
	public UnauthorizedUserException(String message) {
		super(message);
	}

}
