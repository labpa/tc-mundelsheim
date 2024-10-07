import React from "react";
import {Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, NavDropdown} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return(
        <Navbar expand={"lg"} className={"bg-body-tertiary"} bg={"dark"} data-bs-theme={"dark"}>
            <Container>
                <NavbarBrand href={"/"}>TC-Mundelsheim</NavbarBrand>
                <NavbarToggle aria-controls={"basic-navbar-nav"}/>
                <NavbarCollapse id={"basic-navbar-nav"}>
                    <Nav>
                        {/*Über uns*/}
                        <NavDropdown title="Über uns" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/verein">Der Verein</NavDropdown.Item>
                            <NavDropdown.Item href="/mitgliedschaft">Mitgliedschaft</NavDropdown.Item>
                            <NavDropdown.Item href="/jugend">Jugend</NavDropdown.Item>
                        </NavDropdown>

                        {/*Sport und Training*/}
                        <NavDropdown title="Sport und Training" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/mannschaften">Mannschaften</NavDropdown.Item>
                            <NavDropdown.Item href="/training">Training</NavDropdown.Item>
                            <NavDropdown.Item href="/ergebnisse">Ergebnisse</NavDropdown.Item>
                            <NavDropdown.Item href="tennisschule">Tennisschule</NavDropdown.Item>
                        </NavDropdown>

                        {/*Aktuelles*/}
                        <NavDropdown title="Aktuelles" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/termine">Termine</NavDropdown.Item>
                            <NavDropdown.Item href="/aktuelles">Aktuelles</NavDropdown.Item>
                            <NavDropdown.Item href="/berichte">Berichte</NavDropdown.Item>
                        </NavDropdown>

                        {/*Services*/}
                        <NavDropdown title="Service" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/putzdienst">Putzdienst</NavDropdown.Item>
                            <NavDropdown.Item href="/anfahrt">Anfahrt</NavDropdown.Item>
                            <NavDropdown.Item href="service">Service und Links</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </NavbarCollapse>
            </Container>
        </Navbar>
    );
}
export default Navigation;