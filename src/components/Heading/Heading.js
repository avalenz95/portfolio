import React from 'react'
//import Badge from '../Badge/Badge.js'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import "./Heading.css"
const transition = {
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96]
}

const backVariants = {
    exit: { x: 100, opacity: 0, transition },
    enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
}

function Heading(props) {
    const {name} = props


    return(
        <div className="wrapper">
                <div className="title">
                    <h1>{name}</h1>
                </div>
                <div className="return">
                    <motion.div className="back" variants={backVariants}>
                        <Link to="/">
                            <button className="button" href="#">
                                <span className="icon">
                                    <img src={`${process.env.PUBLIC_URL}icons/chevron-back-icon.svg`} alt="return"/>
                                </span>
                            </button>
                        </Link>
                    </motion.div>
                </div>
        </div>
    )
}

export default Heading