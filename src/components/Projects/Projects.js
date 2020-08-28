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
                        title = "Solving Mazes"
                        bgColor = 'rgb(0,0,0, .8)'
                        description = "Solving Mazes with DFS is the first big article that I've written. The article looks at the general structure of a maze and breaks down how that structure can be represented as a graph. From that point, I go through a step by step explanation showing how the algorithm works. I give an overview of adding elements to the stack, removing them and explain backtracking a bit."
                        viewName = "https://medium.com/swlh/solving-mazes-with-depth-first-search-e315771317ae"
                        link = "true"
                />
            </motion.div>
    )
}

export default Projects