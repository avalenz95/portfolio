import React from 'react'
import { motion } from "framer-motion"
import './Blurb.css'

function Blurb(props) {

    const { title, description } = props

    const transition = {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
      
      const variants = {
        exit: { y: "50%", opacity: 0, transition },
        enter: {
          y: "0%",
          opacity: 1,
          transition
        }
      }
    
    return (
            <motion.div className="blurb" initial="exit" animate="enter" exit="exit" variants={variants}>
                <h1>{title}</h1>
                <p>{description}</p>
            </motion.div>
    )
}

export default Blurb