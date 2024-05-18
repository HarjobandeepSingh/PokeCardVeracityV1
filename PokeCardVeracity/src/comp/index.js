import "../comp/ind.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import video from "../assets/videos/bg1.mp4"; // import your video file
// Import the GIF images as modules
import pb1 from "../assets/videos/pb1.gif"
import pb2 from "../assets/videos/pb2.gif"

import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Image,
  Button,
  Form,
} from "react-bootstrap";

export default function CreatePost() {
  const uri = "http://localhost:1000/";

  function handleForm(e) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const obj = {
      userId: UserId,
      postId: postid,
      bimg: "/img/" + data.get("bimg").name,
    };

    axios
      .post(uri + "AddCard", obj)
      .then((succ) => {
        if (succ.data === "done") {
          alert("Data Added");
          setPostId(succ.data);
          e.target.reset();
          e.target.focus();
        }
      })
      .catch((err) => {
        // Handle error here
        console.error(err);
      });
  }

  // for image
  function uploadImage(e) {
    const datao = new FormData();
    datao.append("bimg", img);
    console.log(img);

    axios
      .post(uri + "single", datao)
      .then((succ) => {
        // Log the response from the server
        console.log("success", succ);

        // Display the prediction result
        const prediction = succ.data[0];
        alert(`Prediction: ${prediction}`);

        // Update the prediction state
        setPrediction(prediction);

        e.target.focus();
      })
      .catch((err) => {
        // Handle error here
        console.error("errrrrrr", err);
      });
  }

  const [UserId, setUserId] = useState("");
  const [postid, setPostId] = useState("");
  const [img, setimg] = useState("");
  const [img2, setimg2] = useState("");
  // Create a state variable for prediction
  const [prediction, setPrediction] = useState(null);

  function handleClick() {
    localStorage.clear();
    window.location.href = "/";
  }

  return (
    <>
      <div className="bd">
        <video className="videoTag" autoPlay loop muted style={{position:'absolute',width:'-webkit-fill-available',height:'auto'}}> 
          <source src={video} type="video/mp4" /> 
        </video>
        <Navbar bg="transparent" expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <Image src={logo} width="100" height="80" alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link onClick={handleClick} style={{border:'2px solid white',padding:'8px',borderRadius:'18px'}}>Log Out</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="cre container-fluid">
          <Form onSubmit={handleForm} encType="multipart/form-data">
            <Row className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
              <Col md={6}>
                <Form.Group controlId="centeredInput">
                  <Form.Label>Choose File</Form.Label>
                  <Form.Control
                    type="file"
                    name="bimg"
                    onChange={(e) => setimg(e.target.files[0])}
                  />
                  {/* Add type="button" attribute to prevent form submission */}
                  <Button type="button" variant="primary" onClick={uploadImage} style={{backgroundColor:'#FFA316'}}>
                    Upload Image
                  </Button>
                </Form.Group>
              </Col>
            </Row>
          </Form>
          <div className="kl">
      {/* Use the imported GIF images as sources */}
      {prediction && ( // Render nothing if prediction is null
        prediction === "g" ? ( // Render pb1.gif if prediction is g
          <img src={pb1} alt="pb1" />
        ) : ( // Render pb2.gif otherwise
          <img src={pb2} alt="pb2" />
        )
      )}
    </div>
        </div>
      </div>
    </>

  );
}
