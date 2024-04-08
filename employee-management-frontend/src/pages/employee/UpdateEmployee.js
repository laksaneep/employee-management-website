import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./UpdateEmployee.css";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const UpdateEmployee = () => {
  const router = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    department: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(" name : ", name);
    console.log(" value : ", value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const fetchEmployeeById = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/employee/${id}`
        );
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.log("Error while fetching employee by id : ", error);
      }
    };

    fetchEmployeeById();
  }, [id]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/employee/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = response.json();
      console.log("--- Updated successfully ----", data);
      router("/");
    } catch (error) {
      console.log("--- Error updated data : ", error);
    }
  };

  return (
    <div className="center-form">
      <h1>Edit employee</h1>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group as={Col} md="12" controlId="formBasicName">
          <Form.Control
            className="form-control"
            required
            type="text"
            name="name"
            placeholder="Employee name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="formBasicName">
          <Form.Control
            className="form-control"
            required
            type="email"
            name="email"
            placeholder="Employee email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="formBasicName">
          <Form.Control
            className="form-control"
            required
            type="text"
            name="phone"
            placeholder="Employee phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group as={Col} md="12" controlId="formBasicName">
          <Form.Control
            className="form-control"
            required
            type="text"
            name="department"
            placeholder="Employee department"
            value={formData.department}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button type="submit">Edit employee</Button>
      </Form>
    </div>
  );
};

export default UpdateEmployee;
