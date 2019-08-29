import React from "react";

const Footer = () => {
    return (
        <div className="font-small pt-4 mt-4 bg-default bg-light">
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-md-6 text-center mx-5">
                        <h5 className="title">True Hermit Essentials</h5>
                        <p className="mt-3">
                            A site made for homebodies.
                        <br></br>Enjoy your solitude with our ameneties.</p>
                    </div>

                    <div className="col-xs-6 mx-5 px-3">
                        <h5 className="title">Birna Dam</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="https://github.com/birnapwnsu">Github</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="https://www.linkedin.com/in/birnadam/">LinkedIn</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="https://birnapwnsu.github.io/portfolio/">Portfolio</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xs-6 mx-5 px-3">
                        <h5 className="title">Garrett Young</h5>
                        <ul>
                            <li className="list-unstyled">
                                <a href="https://github.com/GarrettYoung510">Github</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="https://www.linkedin.com/in/garrettyoung510/">LinkedIn</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="https://garrettyoung510.github.io/React-Portfolio/">Portfolio</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">
                <div className="container-fluid">
                    &copy; {new Date().getFullYear()} Copyright: THEssentials
                    </div>
            </div>
        </div>

    );
}

export default Footer;