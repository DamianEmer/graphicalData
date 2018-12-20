package com.dezc.data.code.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.dezc.data.code.model.Sicks;


public interface SicksRepository extends CrudRepository<Sicks, Integer> {
	
	@Query(nativeQuery = true, value = "SELECT * "
			+ "FROM sicks "
			+ "WHERE region LIKE '%' :hint '%'")
	List<Sicks> findAllByHint(@Param("hint") String hint);
	
}
