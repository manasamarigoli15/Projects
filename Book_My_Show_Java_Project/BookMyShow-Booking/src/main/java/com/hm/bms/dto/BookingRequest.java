package com.hm.bms.dto;

import java.util.List;

import lombok.Data;


@Data
public class BookingRequest {
	
	private String username;
	private int showId;
	private List<Integer> bookedSeatIds;
}
