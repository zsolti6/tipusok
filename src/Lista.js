import { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container, Row, Col } from "react-bootstrap";

function Lista() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulated API call - Replace with actual API endpoint
    axios.get("http://localhost:5000/api/Tipusok")
      .then(response => {
        // Transform response to match your data structure
        const formattedData = response.data.map(item => ({
          id: item.id,
          kepek: `Kép ID: ${item.id}`, // Example data for "kepek"
          megnevezes: item.title,
          leiras: item.body
        }));
        setData(formattedData);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">📌 Kártyák Listája</h2>
      <Row className="g-4">
        {data.map(item => (
          <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="custom-card shadow-sm border-0 rounded">
              <Card.Body>
                <Card.Title className="fw-bold text-dark">{item.megnevezes}</Card.Title>
                <Card.Text className="text-muted">{item.leiras}</Card.Text>
                <p className="text-primary fw-semibold">{item.kepek}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Lista;
