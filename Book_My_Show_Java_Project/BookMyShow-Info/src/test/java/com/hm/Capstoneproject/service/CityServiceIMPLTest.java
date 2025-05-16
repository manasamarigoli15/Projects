package com.hm.Capstoneproject.service;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;
import java.util.ArrayList;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import com.hm.Capstoneproject.Exception.NoSuchElementException;
import com.hm.Capstoneproject.Repository.Cityrepo;
import com.hm.Capstoneproject.model.City;


@ExtendWith(SpringExtension.class)
class CityServiceIMPLTest {

	
	@InjectMocks
	private CityServiceIMPL service;
	
	@Mock
	private Cityrepo repo;
	
	@Test
	void testAddcity() {
		City c1=new City();
		when(repo.save(c1)).thenReturn(c1);
		assertEquals(c1,service.addcity(c1));
		assertNotNull(service.addcity(c1),"City Should not be null");
	}
	
	
	@Test
	void testGetallcity() {
		List<City> cities = new ArrayList<>();
		when(repo.findAll()).thenReturn(cities);
		assertThrows(NoSuchElementException.class, ()->service.getallcity());
	}
}