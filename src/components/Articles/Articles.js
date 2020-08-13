import React from 'react'
import Heading from '../Heading/Heading.js'
import { motion } from "framer-motion"
import './Articles.css'
import Blurb from './Blurb.js'
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
  

function Articles() {

    return (
            <motion.div className="art" initial="exit" animate="enter" exit="exit" variants={variants}>
                <div className="heading">
                    <Heading name="Articles"/> 
                </div>

                <Panel 
                        title = "Solving Mazes"
                        bgColor = 'rgb(0,0,0, .8)'
                        description = "Solving Mazes with DFS is the first big article that I've written. The article looks at the general structure of a maze and breaks down how that structure can be represented as a graph. From that point, I go through a step by step explanation showing how the algorithm works. I give an overview of adding elements to the stack, removing them and explain backtracking a bit."
                        viewName = "https://medium.com/swlh/solving-mazes-with-depth-first-search-e315771317ae"
                        link = "true"
                />

                <Panel 
                    title="Prefix Trees"
                    bgColor = 'rgb(0,0,0, .8)'
                    description = "This is an article that I thought would be fun to write and it was! Here I talk about Prefix Trees (aka Tries) and how I implemented them into my Relevant for Reddit project in an attempt to save database space. I still need to benchmark my implementation against hashmaps but thats a milestone set for Relevant v1.5 :)"
                    viewName = "https://medium.com/@ablades/would-you-like-some-tries-with-that-afbc87e56eab"
                    link = "true"
                />

                <Panel 
                    title = "Relevant"
                    bgColor = 'rgb(0,0,0, .8)'
                    description = "ON DECK: This is an article I'm actively writing. In depth on my experience building a web application for reddit using React/Redux, Golang, MongoDB and Docker. I'll talk about some of the things I learned, things I wished I did differently and what I gained out of the entire experience. I've had a blast working on this project and I hope some of that passion will come through in this article."
                    viewName = "/"
                    link = "true"
                />
            </motion.div>
    )
}

export default Articles