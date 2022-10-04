
import React from "react";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";


function Footer() {
    return (
        <div className="footer">
            <a href="http://instagram.com/luliuscaesarg" target="_blank"><FaInstagram className="footer-icons"/></a>
            <a href="https://github.com/dopdev-del" target="_blank"><FaGithub className="footer-icons"/></a>
        </div>
    )
}

export default Footer