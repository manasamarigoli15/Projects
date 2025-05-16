package com.hm.Capstoneproject.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.exceptions.base.MockitoException;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.google.common.util.concurrent.Service;
import com.hm.Capstoneproject.Repository.MultiplexRepo;
import com.hm.Capstoneproject.model.City;
import com.hm.Capstoneproject.model.Multiplex;
import com.hm.Capstoneproject.model.Screen;
import com.hm.Capstoneproject.model.Seat;
import com.hm.Capstoneproject.model.Show;

@ExtendWith(MockitoExtension.class)
class MultiplexServiceImplTest {

	@InjectMocks
	MultiplexServiceImpl service;

	@Mock
	MultiplexRepo repo;
	City city;
	List<Show> show;
	List<Screen> screens = new ArrayList<>();
	Multiplex multiplex;
	List<Seat> seat;
	List<Multiplex> multiplexes = new ArrayList<>();

	@BeforeEach
	void setUp() {
		city = new City();
		show = new ArrayList<>();

		seat = new ArrayList<>();
		Screen screen = new Screen(1, "firstscreen", 20, seat);
		screens.add(screen);
		multiplex = new Multiplex(1, "Forum", 2, "bsk 3rd stage", city, show, screens);
		multiplexes.add(multiplex);
	}

	@Test
	void testAddMultiplex() {
		System.out.println(multiplex);
		when(repo.save(multiplex)).thenReturn(multiplex);
		assertEquals(multiplex, service.addMultiplex(multiplex));
	}

	@Test
	void testGetMultiplexById() {
		when(repo.existsById(1)).thenReturn(true);
		when(repo.getById(1)).thenReturn(multiplex);
		assertEquals(multiplex, service.getMultiplexById(1));
	}

	@Test
	void testGetAllMultiplexes() {
		when(repo.findAll()).thenReturn(multiplexes);
		when(repo.findAll()).thenReturn(multiplexes);
		assertEquals(multiplexes, service.getAllMultiplexes());
	}

	@Test
	void testDeleteMultiplex() {
		when(repo.existsById(1)).thenReturn(true);
		assertDoesNotThrow(() -> service.deleteMultiplex(multiplex));

	}

}