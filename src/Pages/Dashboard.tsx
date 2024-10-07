import React, { FC } from "react";
import startbild from "../Images/startbild.jpg";
import { Container, Image } from "react-bootstrap";
import "../App.css";  // Füge eine CSS-Datei hinzu

const Dashboard: FC = () => {
    return (
        <Container
            className="container-sm d-flex flex-column justify-content-center align-items-center text-center p-3">
            <h1 className={"text-dark-orange"}>Tennisclub Mundelsheim</h1>
            <Image src={startbild} rounded className="responsive-image"/>
        </Container>
    );
};

export default Dashboard;
