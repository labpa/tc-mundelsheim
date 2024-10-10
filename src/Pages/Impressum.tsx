import React, {FC} from "react";
import {Container, Image} from "react-bootstrap";
import aktuelles from "../Images/aktuelles.jpg";


const Impressum : FC = () => {



    return(
        <Container className={"container-sm d-flex flex-column justify-content-center align-items-center text-center p-3"}>
            <h1 className={"text-dark-orange"}>Impressum</h1>
        </Container>
    )
}

export default Impressum;