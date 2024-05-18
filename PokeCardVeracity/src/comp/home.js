import React from "react"; 
import { Link } from "react-router-dom";
import heroimg from '../assets/images/njx.png';
import logo from '../assets/images/logo.png'
import herovid from '../assets/videos/rayquaza-flying-in-the-sky-pokemon-moewalls.com.mp4';
import { Application } from '@splinetool/runtime';
import { Navbar, Nav, Container , Row, Col, Image } from "react-bootstrap";
import "../App.css";





export default function Home(){
    return(
        <>



        <div className="mainDiv" >
            
            <Navbar bg="transparent" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="100"
                        height="80"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" >
                        <Nav.Link ><Link to="/Login" className="LOGIN">Login Now</Link></Nav.Link>
                        <Nav.Link ><Link to="/Register" className="Register">Create Account</Link></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className='container-fluid'> 
                <Row className="txt"> <Col md={6}> <h1> <strong style={{color:'#47B6E4'}}> Discover </strong>the Truth of Your Pokemon </h1>
                 <h1> Cards: <strong style={{color:'#D4584B'}}>Authenticity</strong> Made Simple at </h1> 
                 <h1 style={{color:'#FFA316'}}> PokeCardVeraCity!</h1></Col> <Col md={4}> 
                 <Image src={heroimg} alt='Hero image' fluid                         style={{borderRadius:'84px'}} /> </Col> </Row> </div>      
              </div>
        {/* <div className="HeroSection">
            <video autoPlay muted loop  width={'100%'} height={'auto'}>
                <source src={herovid} type="video/mp4" />
                <source src={herovid} type="video/webm" />
                Your browser does not support the video tag.
            </video>
        <div className="bg-video__overlay"></div>
        <div className="herotextk">
        
        <div className="main" style={{lineHeight:"70px"}}><span>See Your Cards in a</span> <div style={{textAlign:'center'}}>New Light</div>
        <h3 style={{margin:'10px 0px 0px 140px'}}><Link to="/index">Authenticate Now</Link></h3> 
        </div> 
        
            </div>
        
        </div> */}

        </>
    );
}