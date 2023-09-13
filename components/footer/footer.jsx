import React from "react";
import './footer.css'

import {FaFacebook, FaTwitter, FaInstagram, FaYoutube} from "react-icons/fa";

function Footer() {
    return <div>
        <footer>
            <div className="icons">
                <FaFacebook
                    style={{
                        width: "24px",
                        height: "24px"
                    }}
                />
                <FaInstagram 
                    style={{
                        width: "24px",
                        height: "24px"
                    }}
                />
                <FaTwitter
                    style={{
                        width: "24px",
                        height: "24px",
                    }}
                />
                <FaYoutube 
                    style={{
                        width: "24px",
                        height: "24px"
                    }}
                />
            </div>
            <div className="text">
                <h3>Conditions Of Use</h3>
                <h3>Privacy & Policy</h3>
                <h3>Press Room</h3>
            </div>
            <div className="copyright">
                <h3>@2023 MovieBox by Precious Awe</h3>
            </div>
        </footer>
    </div>
}

export default Footer