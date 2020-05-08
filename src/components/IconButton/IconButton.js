import React from 'react'
import './IconButton.css'
import { motion } from "framer-motion";

function IconButton(props) {

    const { name, location, alt, href} = props

    return (

        <motion.button className="iconbutton"
            onClick={() =>  window.open(href)} 
            animate={{scale: [0, 1] }} 
            transitions={{ ease: "easeIn", duration: 3}} 
            whileHover={{ scale: 1.3, rotate: 360, duration: 10 }}
        >
            <img src={`${process.env.PUBLIC_URL}${location}`} alt={alt}/>
            {/* Render only if name exists */}
            {name ? <span>{name}</span> : ''}
        </motion.button>
    )
}

export default IconButton