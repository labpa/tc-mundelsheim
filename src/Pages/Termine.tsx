import React, {FC} from "react";
import termine from "../Images/Termine_2024.jpg"
import {Container, Image} from "react-bootstrap";


const Termine : FC = () => {



    return(
        <Container className="container-sm d-flex flex-column justify-content-center align-items-center text-center p-3">
            <Image src={termine} rounded className="responsive-image" />
        </Container>
    )
}

export default Termine;