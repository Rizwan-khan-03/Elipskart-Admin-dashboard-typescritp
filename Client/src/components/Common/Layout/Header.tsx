import React from 'react';
import { useNavigate } from "react-router-dom";
import { clearStorage } from '../../../App/Service/Service';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

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
                                onClick={props.calback} className="w3-button w3-teal w3-xlarge">&#9776;</button></Navbar.Brand>
                            <DropdownButton id="dropdown-button-drop" drop='start' size="sm"
                                variant="secondary" title="Menu" >
                                <Dropdown.Item as="button">Update Profile</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={handlelogOut}>Logout</Dropdown.Item>
                            </DropdownButton>
                        </Container>
                    </Navbar>
                </Col>


            </div>
        </>

    )
}

export default Header;