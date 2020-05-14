import React from 'react'
//import Badge from '../Badge/Badge.js'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import "./Heading.css"

function Heading(props) {
    const {name} = props


    return(
        <div className="wrapper">
                <div className="title">
                    <h1>{name}</h1>
                </div>
                <div className="return">
                    <motion.button
                        animate={{ x: [100, 0]}} 
                        transitions={{ ease: "easeIn", duration: 3}} 
                    >
                        <Link to="/">
                            <img src={`${process.env.PUBLIC_URL}/icons/chevron.svg`} alt="return"/>
                        </Link>
                    </motion.button>           
                </div>
        </div>
    )
}

export default Heading