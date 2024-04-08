import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewEmployee.css";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const NewEmployee = () => {
  const router = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    department: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("--- formData : ", formData);

    try {
      const response = await fetch("http://localhost:8080/api/employee", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("--- employee was added: ", data);
      router("/");
    } catch (error) {
      console.log("---- Error : ", error);
    }
  };

  return (
    <div className="center-form">
      <h1>Add new employee</h1>
      <Form onSubmit={handleSubmit}>
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
        <Button type="submit">Add employee</Button>
      </Form>
    </div>
  );
};

export default NewEmployee;
