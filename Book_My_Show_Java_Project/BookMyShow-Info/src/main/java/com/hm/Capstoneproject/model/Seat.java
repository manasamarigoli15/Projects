package com.hm.Capstoneproject.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="seat")
public class Seat {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private int seatNo;
}
