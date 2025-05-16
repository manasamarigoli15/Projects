package com.hm.bms.authservice.error;

import java.time.LocalDateTime;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.hm.bms.authservice.exception.UnauthorizedUserException;

@RestControllerAdvice
public class ErrorController {
	
	@ResponseStatus(code=HttpStatus.FORBIDDEN)
	@ExceptionHandler(value = {UnauthorizedUserException.class})
	public ErrorResponse handleEmployeeNotFOundException(Exception ex,HttpServletRequest request) {
	
	LocalDateTime timestamp = LocalDateTime.now();
	int status = HttpStatus.FORBIDDEN.value();
	String error = HttpStatus.FORBIDDEN.getReasonPhrase();
	String message = ex.getMessage();
	String path = request.getRequestURI();
	
	return new ErrorResponse(timestamp,status,error,message,path);
}

}
