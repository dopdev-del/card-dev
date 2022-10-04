import React from 'react'
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Nombre() {
  return (
    <div className="about-container">
            <div className="card-details">
                <h1>Junior German</h1>
                <p className="title">Frontend Developer</p>
                <a className="position" href="https://precious-lollipop-8eb79b.netlify.app/">www.juniordev.com</a>
                <div className="media-buttons">
                    <a className="email" href="mailto:juniornova90@gmail.com"><button><FaEnvelope className="button-icons"/>Email</button></a>
                    <a href="https://www.linkedin.com/in/junior-german-093729115/"><button className="linkedin"><FaLinkedin className="button-icons"/>LinkedIn</button></a>
                </div>
            </div>
            <div className="about">
                <h3>About</h3>
                <p>Tech enthusiast developing skills in frontend development. Currently working in somes smalls projects getting experience and developing skills in order to go for the greater things.</p>
            </div>
            <div className="interests">
                <h3>Interests</h3>
                <p>Technical writing, content creator, blockchain technology</p>
            </div>
        </div>
  )
}
