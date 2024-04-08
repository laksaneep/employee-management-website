package com.laksaneep.employeemanagementserver.repository;

import com.laksaneep.employeemanagementserver.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
