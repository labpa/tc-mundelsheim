import React, {FC} from "react";
import {Container, Image} from "react-bootstrap";
import aktuelles from "../Images/aktuelles.jpg"


const Aktuelles : FC = () => {



    return(
        <Container className={"container-sm d-flex flex-column justify-content-center align-items-center text-center p-3"}>
            <h1 className={"text-dark-orange"}>Aktuelles</h1>
            <h2>Sonntag 07.07.2024 Match-Tie-Break Turnier auf der Anlage ab 14 Uhr </h2>
            <Image src={aktuelles} rounded className={"responsive-image"}/>
        </Container>
    )
}

export default Aktuelles;