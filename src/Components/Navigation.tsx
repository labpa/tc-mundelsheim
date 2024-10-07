import React from "react";
import { Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link instead of NavLink

const Navigation = () => {
    return (
        <Navbar expand={"lg"} className={"bg-body-tertiary"} bg={"dark"} data-bs-theme={"dark"}>
            <Container>
                <NavbarBrand as={Link} to="/dashboardtennis">TC-Mundelsheim</NavbarBrand>
                <NavbarToggle aria-controls={"basic-navbar-nav"} />
                <NavbarCollapse id={"basic-navbar-nav"}>
                    <Nav>
                        {/* Über uns */}
                        <NavDropdown title="Über uns" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/verein">Der Verein</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/mitgliedschaft">Mitgliedschaft</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/jugend">Jugend</NavDropdown.Item>
                        </NavDropdown>

                        {/* Sport und Training */}
                        <NavDropdown title="Sport und Training" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/mannschaften">Mannschaften</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/training">Training</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ergebnisse">Ergebnisse</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/tennisschule">Tennisschule</NavDropdown.Item>
                        </NavDropdown>

                        {/* Aktuelles */}
                        <NavDropdown title="Aktuelles" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/termine">Termine</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/aktuelles">Aktuelles</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/berichte">Berichte</NavDropdown.Item>
                        </NavDropdown>

                        {/* Services */}
                        <NavDropdown title="Service" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/putzdienst">Putzdienst</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/anfahrt">Anfahrt</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/service">Service und Links</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
