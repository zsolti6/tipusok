import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";

function TipusCreate() {
  const [formData, setFormData] = useState({
    kepek: "",
    megnevezes: "",
    leiras: ""
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    axios.post("https://localhost:5001/api/UjTipusok", formData)
      .then(() => {
        navigate("/");
      })
      .catch(error => {
        console.error("Error creating tipus:", error);
        setError("Hiba történt a típus létrehozása közben.");
      });
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Új Típus Létrehozása</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit} className="w-50 mx-auto">
        <Form.Group className="mb-3">
          <Form.Label>Megnevezés</Form.Label>
          <Form.Control 
            type="text" 
            name="megnevezes" 
            value={formData.megnevezes} 
            onChange={handleChange} 
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Leírás</Form.Label>
          <Form.Control 
            as="textarea" 
            name="leiras" 
            value={formData.leiras} 
            onChange={handleChange} 
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Kép neve</Form.Label>
          <Form.Control 
            type="text" 
            name="kepek" 
            value={formData.kepek} 
            onChange={handleChange} 
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">Létrehozás</Button>
      </Form>
    </Container>
  );
}

export default TipusCreate;