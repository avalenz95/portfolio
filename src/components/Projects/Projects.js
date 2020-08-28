import React from 'react'
import Heading from '../Heading/Heading.js'
import { motion } from "framer-motion"
import './Projects.css'
import Panel from '../Panel/Panel.js'

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
  

function Projects() {

    return (
            <motion.div className="proj" initial="exit" animate="enter" exit="exit" variants={variants}>
                <div className="heading">
                    <Heading name="Projects"/> 
                </div>

                <Panel 
                        title = "Relevant - for Reddit"
                        bgColor = 'rgb(0,0,0, .8)'
                        description = "Relevant is a Google Alerts style web application designed specifically to work with Reddit. In this project I use third part auth, concurrency, custom datastructures, create an API and a lot more. I'm currently in the process of Dockerizing and getting the project ready for V1.0!"
                        viewName = "github.com/ablades/relevantreddit"
                        link = "true"
                />


            </motion.div>
    )
}

export default Projects