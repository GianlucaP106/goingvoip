import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import Link from "next/link";
// import goingvoipLogo from "/goingvoipLogo.png";

import "bootstrap/dist/css/bootstrap.min.css";


export default function Navibar() {

    return(
        <section>
            <div style={{boxShadow: "0px 4px 2px 0px #c6c6c6"}}>
                <Navbar collapseOnSelect expand="lg" className="bgColor" variant="light">
                    <Container>
                        <Navbar.Brand href="/"><img src="/goingvoipLogo.png" className="brandFixPosition" alt="GoingVoIP logo" height="60" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto ms-auto">
                                <Nav.Link className="text-black navPadFix navPosFix" style={{display: "flex", alignItems: "center"}} href="/#productsSection">Products</Nav.Link>
                                <Nav.Link className="text-black navPadFix navPosFix" style={{display: "flex", alignItems: "center"}} href="/#priceSection1">Plans and pricing</Nav.Link>
                                {/* <Nav.Link className="text-black navPadFix" style={{display: "flex", alignItems: "center"}} href="">Industries</Nav.Link> */}
                                <Nav.Link className="text-black navPadFix navPosFix" href="" style={{textDecoration: "none", color: "black", display: "flex", alignItems: "center"}}>About Us </Nav.Link>
                                <Nav.Link className="text-black navPadFix navPosFix" href="/contact-us" style={{paddingBottom: "10px"}}><button className="greenButton" style={{color: "white"}}>Request a Quote</button></Nav.Link>
                                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown> */}
                            </Nav>
                            <Nav>
                                {/* <Nav.Link href="#deets">Fr</Nav.Link> */}
                                {/* <Nav.Link eventKey={2} href="#memes">
                                    Dank memes
                                </Nav.Link> */}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </section>
    );
}