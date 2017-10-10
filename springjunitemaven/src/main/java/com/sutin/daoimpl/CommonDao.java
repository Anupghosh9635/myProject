package com.sutin.daoimpl;

import java.util.List;
import java.util.Map;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class CommonDao {

	
	JdbcTemplate jdbcTemplate;
	
public List<Map<String,Object>> getCrediantial() {
	
	return jdbcTemplate.queryForList("");
	
}
}
