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
                        title="Articles"
                        bgColor = 'rgb(24,89,118, .9)'
                        description = "My articles can be found on my medium page. This section gives a high level overview of the articles and the inspiration behind each of them."
                        viewName="Articles"

                    />

                <Panel 
                        title="Articles"
                        bgColor = 'rgb(24,89,118, .9)'
                        description = "My articles can be found on my medium page. This section gives a high level overview of the articles and the inspiration behind each of them."
                        viewName="Articles"

                    />

                <Panel 
                        title="Articles"
                        bgColor = 'rgb(24,89,118, .9)'
                        description = "My articles can be found on my medium page. This section gives a high level overview of the articles and the inspiration behind each of them."
                        viewName="Articles"

                    />
                <Panel />
            </motion.div>
    )
}

export default Articles