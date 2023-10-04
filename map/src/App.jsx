import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Map from "./component/Map";
import { useState } from "react";
import Graph from "./component/graph/Graph";
function App() {
  const [mapData, setMapData] = useState({
    lat: 28.6030876,
    lng: 77.3671873,
    icon: "school",
  });
  const [inputData, setInputData] = useState({
    lat: 28.6030876,
    lng: 77.3671873,
    icon: "school",
  });
  const handleInputChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setMapData({ ...inputData });
  };
  return (
    <div style={{background:"EEEEEE"}}>
      <div style={{padding:"20px" ,background:"black"}}>
        <h1 style={{color:"white",textAlign:"center",marginBottom:"20px"}}>Search Place</h1>
        <Form onSubmit={handleFormSubmit} className="mb-3">
          <Row>
            <Col>
              <Form.Control
                type="number"
                placeholder="Enter Latitude"
                name="lat"
                onChange={handleInputChange}
              />
            </Col>
            <Col>
              <Form.Control
                type="number"
                placeholder="Enter Longitude"
                name="lng"
                onChange={handleInputChange}
              />
            </Col>
            <Col>
              <Form.Select
                defaultValue="Select"
                name="icon"
                onChange={handleInputChange}
              >
                <option value="school">School</option>
                <option value="collage">Collage</option>
              </Form.Select>
            </Col>
            <Col className='d-flex justify-flex-start'>
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
      <div>
      <Map mapData={mapData} />
      </div>
      <div>
        <Graph />
      </div>
    </div>
  );
}

export default App;
