import React from 'react'
import IconButton from '../IconButton/IconButton.js'
import './Nav.css'
import { motion } from "framer-motion";
function Nav() {

    return (
        <nav className="navbar">
            <div className="name">
                <h1>ABlades.DEV</h1>
            </div>
                <motion.div className="icons" transition={{staggerChildren: 0.5}}>
                    <IconButton
                        location = "icons/medium-icon.svg"
                        alt = "medium"
                        href = "https://medium.com/@ablades"
                    />

                    <IconButton
                        location = "icons/github-icon.svg"
                        alt = "github"
                        href = "https://github.com/ablades"
                    />

                    <IconButton
                        location = "icons/linkedin-icon.svg"
                        alt = "linkedin"
                        href = "https://linkedin.com/in/ablades"
                    />
                    
                    {/* ADD DOWNLOAD AND RESUME */}
                    <IconButton
                        location = "icons/resume-icon.svg"
                        alt = "resume"
                        href ={`${process.env.PUBLIC_URL}resume.pdf`}
                        name = "resume"
                    />

                </motion.div>
        </nav>

    )
}

export default Nav
