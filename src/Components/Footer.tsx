import React, {FC} from "react";
import {Link} from "react-router-dom";

interface FooterProps {
    className?: string;
}

const Footer : FC<FooterProps> = () => {
    return (
        <div data-bs-theme={"dark"}>
            <div style={{backgroundColor: "#EC7600"}}>
                <footer className={"py-1"}>
                    <ul className={"nav justify-content-center border-bottom pb-1 mb-1"}>
                        <li className={"nav-link "}>
                            <Link
                                className={"link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"}
                                to={"/datenschutz"}
                            >
                                Datenschutz
                            </Link>
                        </li>
                        <li className={"nav-link"}>
                            <Link
                                className={"link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"}
                                to={"/impressum"}
                            >
                                Impressum
                            </Link>
                        </li>
                        <li className={"nav-link"}>
                            <Link
                                className={"link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"}
                                to={"/kontakt"}
                            >
                                Kontakt
                            </Link>
                        </li>
                    </ul>
                    <p className={"text-center"}>
                        © 2024 Copyright:&nbsp;
                        <a
                            className={"link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"}
                            href="https://github.com/labpa"
                        >
                            Labpa
                        </a>
                    </p>
                </footer>
            </div>
        </div>

    )

}

export default Footer;