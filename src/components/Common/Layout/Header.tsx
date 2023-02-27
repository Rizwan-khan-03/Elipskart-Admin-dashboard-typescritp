import React from 'react';
import { useNavigate } from "react-router-dom";
import { clearStorage } from '../../../App/Service/Service';
import SideBaar from './SideBaar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Header(props: any) {
    const navigate = useNavigate()
    const handlelogOut = (event: any) => {
        clearStorage();
        navigate('/')
        console.log("logout Success");

    };
    return (
        <>
            <div>
                
                    <Col>
                        <Navbar expand="lg" className='anvAdm_header'>
                            <Container fluid>
                                <Navbar.Brand href="#"> <button id="openNav"
                                    onClick={props.calback} className="w3-button w3-teal w3-xlarge"
                                    style={{
                                        // background:
                                        //     'linear-gradient(180deg, rgba(166,240,255,1) 0%, rgba(220,250,255,1) 49%, rgba(230,252,255,1) 100%)',
                                        // paddingLeft: '12px', paddingRight: '12px'
                                    }}>&#9776;</button></Navbar.Brand>
                                <Button variant="outline-success" onClick={handlelogOut}
                                    style={{
                                        // background:
                                        //     'linear-gradient(180deg, rgba(166,240,255,1) 0%, rgba(220 ,250,255,1) 49%, rgba(230,252,255,1) 100%)',
                                        marginRight: '18px'
                                    }}
                                >Logout</Button>
                            </Container>
                        </Navbar>
                    </Col>
                

            </div>
        </>

    )
}

export default Header;