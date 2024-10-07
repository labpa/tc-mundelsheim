import React, {FC} from "react";
import {Container, Image} from "react-bootstrap";
import jugend from "../Images/Jugendflyer.jpg";


const Jugend : FC = () => {



    return(
        <Container className={"container-sm d-flex flex-column justify-content-center align-items-center text-center p-3"}>
            <h1 className={"text-dark-orange"}>Jugend</h1>
            <h2>Lust Tennis auszuprobieren?!</h2>
            <h3>dann melde Dich einfach bei:</h3>
            <h3>Jugendwart Pia Spitzner</h3>
            <h3>Tel.: 07143-851968 pia.spitzner@icloud.com</h3>
            <Image src={jugend} rounded className={"responsive-image"}/>
        </Container>
    )
}

export default Jugend;