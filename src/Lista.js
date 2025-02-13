import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

function Lista() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://localhost:5001/api/Tipusok")
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">📌 Típusok listázása</h2>
      <Row className="g-4">
        {data.map(item => (
          <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="custom-card shadow-sm border-0 rounded d-flex flex-column h-100">
              <Card.Body className="d-flex flex-column justify-content-between">
                <div>
                  <Card.Title className="fw-bold text-dark">{item.megnevezes}</Card.Title>
                  <p className="text-primary fw-semibold">Kép neve: {item.kepek}</p>
                </div>
                <Button 
                  variant="primary" 
                  className="mt-auto w-100   d-flex align-items-center justify-content-center" 
                  onClick={() => navigate(`/tipus/${item.id}`)}
                >
                  Részletek {"->"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Lista;