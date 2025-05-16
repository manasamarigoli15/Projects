package com.hm.bms.authservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hm.bms.authservice.model.Role;

public interface RoleRepository extends JpaRepository<Role, String> {

}
