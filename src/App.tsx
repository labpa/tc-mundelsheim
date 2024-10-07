import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import Verein from "./Pages/Verein";
import Mitgliedschaft from "./Pages/Mitgliedschaft";
import Jugend from "./Pages/Jugend";
import Termine from "./Pages/Termine";
import Aktuelles from "./Pages/Aktuelles";
import Berichte from "./Pages/Berichte";
import Mannschaften from "./Pages/Mannschaften";
import Training from "./Pages/Training";
import Ergebnisse from "./Pages/Ergebnisse";
import Tennisschule from "./Pages/Tennisschule";
import Putzdienst from "./Pages/Putzdienst";
import Anfahrt from "./Pages/Anfahrt";
import Service from "./Pages/Service";
import Datenschutz from "./Pages/Datenschutz";
import Impressum from "./Pages/Impressum";
import Kontakt from "./Pages/Kontakt";

const App: FC = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navigation />

            {/* Main Content Area, ensure it grows to take available space */}
            <div className="flex-grow-1">
                <Routes>
                    {/*Dashboard*/}
                    <Route path={"/"} element={<Dashboard />} />

                    {/*Über uns*/}
                    <Route path={"/verein"} element={<Verein/>}/>
                    <Route path={"/mitgliedschaft"} element={<Mitgliedschaft/>}/>
                    <Route path={"/jugend"} element={<Jugend/>}/>

                    {/*Sport und Training*/}
                    <Route path={"/mannschaften"} element={<Mannschaften/>}/>
                    <Route path={"/training"} element={<Training/>}/>
                    <Route path={"/ergebnisse"} element={<Ergebnisse/>}/>
                    <Route path={"/tennisschule"} element={<Tennisschule/>}/>

                    {/*Aktuelles*/}
                    <Route path={"/termine"} element={<Termine/>}/>
                    <Route path={"/aktuelles"} element={<Aktuelles/>}/>
                    <Route path={"/berichte"} element={<Berichte/>}/>

                    {/*Services*/}
                    <Route path={"/putzdienst"} element={<Putzdienst/>}/>
                    <Route path={"/anfahrt"} element={<Anfahrt/>}/>
                    <Route path={"/service"} element={<Service/>}/>

                    {/*Footer*/}
                    <Route path={"/datenschutz"} element={<Datenschutz/>}/>
                    <Route path={"/impressum"} element={<Impressum/>}/>
                    <Route path={"/kontakt"} element={<Kontakt/>}/>




                </Routes>
            </div>

            {/* Footer should be placed at the bottom */}
            <Footer className="mt-auto" />
        </div>
    );
};

export default App;
