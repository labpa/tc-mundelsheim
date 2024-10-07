import React, { FC } from "react";
import vorstand from "../Images/Vorstand2024.jpg";
import { Container, Image } from "react-bootstrap";

const Verein: FC = () => {
    return (
        <Container
            className="container-sm d-flex flex-column justify-content-center align-items-center text-center p-3">
            <h1 className={"text-dark-orange"}>Der Verein</h1>
            <h2>Der Vorstand 2024</h2>
            <Image src={vorstand} rounded className="responsive-image"/>
            <p>
                von links: Dagmar Ritter, Thomas Maier, Sabine Drixler, Christian Erz,
                Jasmin Cay, Jacqueline Kühne, Francesco Iannuzzi
            </p>
            <div className={"container-sm"}>
                <hr style={{borderColor: '#EC7600'}} className="border-end border-2 opacity-75"/>

                <h2>1. Vorsitzende</h2>
                <h3>Sabine Drixler</h3>
                <p>Tel. 07143-585384</p>
                <p>sabine.drixler@tc-mundelsheim.de</p>
                <hr style={{borderColor: '#EC7600'}} className="border-end border-2 opacity-75"/>

            </div>

            <div className={"container-sm"}>
                <h2>1. Beisitzerin</h2>
                <h3>Jacqueline Kühne</h3>
                <p>jacquelinekuehne@web.de</p>
                <hr style={{borderColor: '#EC7600'}} className="border-end border-2 opacity-75"/>

            </div>

            <div className={"container-sm"}>
                <h2>Kassenwart</h2>
                <h3>Thomas Maier</h3>
                <p>Tel. 07143-59491</p>
                <p>maier_tho@web.de</p>
                <hr style={{borderColor: '#EC7600'}} className="border-end border-2 opacity-75"/>

            </div>

            <div className={"container-sm"}>
                <h2>Technischer Vorstand</h2>
                <h3>Francesco Iannuzzi</h3>
                <p>Tel. 01525-4758005</p>
                <p>franceso.iannuzzi@gmx.de</p>
                <hr style={{borderColor: '#EC7600'}} className="border-end border-2 opacity-75"/>

            </div>

            <div className={"container-sm"}>
                <h2>1. Sportwart</h2>
                <h3>Christian Erz</h3>
                <p>Tel. 07143-5399</p>
                <p>christian.erz@web.de</p>
                <hr style={{borderColor: '#EC7600'}} className="border-end border-2 opacity-75"/>

            </div>

            <div className={"container-sm"}>
                <h2>Jugendwart</h2>
                <h3>Jasmin Cay</h3>
                <p>si-ja@gmx.net</p>
                <hr style={{borderColor: '#EC7600'}} className="border-end border-2 opacity-75"/>

            </div>

            <div className={"container-sm"}>
                <h2>Schriftführerin</h2>
                <h3>Dagmar Ritter</h3>
                <p>Tel. 07143-59109</p>
                <p>daisyritter@web.de</p>
                <hr style={{borderColor: '#EC7600'}} className="border-end border-2 opacity-75"/>

            </div>

            <div className={"container-sm"}>
                <h2>Platzwart</h2>
                <h3>Rudolf Seitzer</h3>
                <p>Tel. 0171-2346484</p>
                <hr style={{borderColor: '#EC7600'}} className="border-end border-2 opacity-75"/>


            </div>
        </Container>
    );
};

export default Verein;
