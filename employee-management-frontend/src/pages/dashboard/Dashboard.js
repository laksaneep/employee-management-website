import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const DashBoard = () => {
  const router = useNavigate();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/allEmployee");
        const data = await response.json();

        setEmployees(data);
      } catch (error) {
        console.log("---- fetchEmployee failed with error : ", error);
      }
    };

    fetchEmployees();
  }, [employees]);

  const handleUpdateEmp = (employeeId) => {
    router(`/employee/${employeeId}`);
  };

  const handleDeleteEmp = async (employeeId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/employee/${employeeId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setEmployees((prevEmp) => {
          return prevEmp.filter((emp) => emp.id !== employeeId);
        });
      }
      console.log("Employee id : " + employeeId + " was delete successfully");
    } catch (error) {
      console.log("--- delete employee error : ", error);
    }

    router("/");
  };

  return (
    <Container className="ml-5">
      <Row>
        <Col>
          <h1 className="text-center">Employees</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => {
                return (
                  <tr key={emp.id}>
                    <td>{emp.name}</td>
                    <td>{emp.email}</td>
                    <td>{emp.phone}</td>
                    <td>{emp.department}</td>
                    <td style={{ display: "flex", gap: "0.5rem" }}>
                      <Button
                        variant="outline-secondary"
                        onClick={() => handleUpdateEmp(emp.id)}
                      >
                        Update
                      </Button>
                      <Button
                        variant="outline-danger"
                        onClick={() => handleDeleteEmp(emp.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default DashBoard;
