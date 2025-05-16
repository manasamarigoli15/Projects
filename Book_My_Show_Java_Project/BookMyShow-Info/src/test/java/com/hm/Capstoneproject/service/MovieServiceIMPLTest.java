package com.hm.Capstoneproject.service;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.time.LocalDate;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import com.hm.Capstoneproject.Exception.NoSuchElementException;
import com.hm.Capstoneproject.Repository.Movierepo;
import com.hm.Capstoneproject.Repository.showrepo;
import com.hm.Capstoneproject.model.Genre;
import com.hm.Capstoneproject.model.Movie;
import com.hm.Capstoneproject.model.Review;
import com.hm.Capstoneproject.model.Show;

@ExtendWith(SpringExtension.class)
class MovieServiceIMPLTest {

	@InjectMocks
	private MovieServiceIMPL service;

	@Mock
	private Movierepo repo;

	@Mock
	private showrepo showRepo;
	List<Review> r1;
	List<Movie> m1;
	Movie m2;
	List<Genre> g3;
	Show s1;

	@BeforeEach
	void setUp() {
		r1 = new ArrayList<>();
		m1 = new ArrayList<>();
		m2 = new Movie(1, "Spectre", Genre.ACTION, "English", "2D", 4.5, 120, LocalDate.of(2022, 01, 01), "about",
				"cast", "crew", "https://image", "https://bg_image", r1);
	}

	@Test
	void testGetMovieById() {
		when(repo.existsById(1)).thenReturn(true);
		when(repo.findById(1)).thenReturn(Optional.of(m2));
		assertEquals(m2, service.getMovieById(1));
	}

	@Test
	void testGetAllMovies() {
		when(repo.findAll()).thenReturn(m1);
		assertThrows(NoSuchElementException.class, () -> service.getAllMovies());
		m1.add(m2);
		when(repo.findAll()).thenReturn(m1);
		when(repo.findAll()).thenReturn(m1);
		;
		assertEquals(m1, service.getAllMovies());
		m1.remove(m2);

	}

	@Test
	void testGetMoviesByGenre() {
		when(repo.findByGenreIn(g3)).thenReturn(m1);
		assertThrows(NoSuchElementException.class, () -> service.getMoviesByGenre(g3));
	}


	@Test
	void testSaveMovie() {
		when(repo.save(m2)).thenReturn(m2);
		assertEquals(m2, service.saveMovie(m2));
	}
}