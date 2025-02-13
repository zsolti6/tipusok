import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Card, Container, Spinner } from "react-bootstrap";

function TipusSingle() {
  const { tipusId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://localhost:5001/api/Tipusok/${tipusId}`)
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      });
  }, [tipusId]);

  if (loading) return <Spinner animation="border" className="d-block mx-auto mt-5" />;
  if (error) return <p className="text-center text-danger mt-5">Hiba történt az adatok betöltése közben.</p>;

  return (
    <Container className="mt-4">
      <Card className="custom-card shadow-sm border-0 rounded w-25 mx-auto">
        <Card.Body>
          <Card.Title className="fw-bold text-dark">{data.megnevezes}</Card.Title>
          <p className="text-primary fw-semibold">{data.leiras}</p>
          <p className="text-primary fw-semibold">Kép neve: {data.kepek}</p>
            <Button 
                  variant="primary" 
                  className="mt-auto w-100   d-flex align-items-center justify-content-center" 
                  onClick={() => navigate(`/`)}
                >
                  Vissza {"<-"}
            </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default TipusSingle;
