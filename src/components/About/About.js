import React from 'react'
import Heading from '../Heading/Heading.js'
import './About.css'
import { motion } from "framer-motion";


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
  

function About() {

    const style = {
        box: {
            height: '100%',
            backgroundColor: 'rgb(187,61,32, .8)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },

        section: {
            border: 'solid white',
            backgroundColor: 'transparent'
        },
        
        text: {
            color: 'white',
        }
    }

    const {box, section, text} = style

    return (

            <motion.div className="container" initial="exit" animate="enter" exit="exit" variants={variants}>
                <div className="box" style={box}>
                    <Heading name="About Me"/>

                    <div class="columns">
                        <div class="box" style={section}>
                            <div class="column is-three-quarters">
                                <p class="title is-3" style={text} >
                                    My Background
                                </p>
                                
                                <p class="subtitle is-5" style={text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                </p>
                            </div>

                            <div class="column is-one-quarter" style={text}>

                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div class="columns">
                        <div class="box" style={section}>
                            <div class="column is-three-quarters">  
                                <p class="subtitle is-5" style={text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                </p>

                            </div>

                            <div class="column is-one-quarter">
                                <p class="title is-3" style={text}>
                                    My Experience
                                </p>
                            </div>
                        </div>

                    </div>
                    <br></br>
                    <div class="columns">
                        <div class="box" style={section}>
                            <div class="column is-three-quarters">
                                <p class="title is-3" style={text}>
                                    My Ambitions
                                </p>
                                
                                <p class="subtitle is-5" style={text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                </p>
                            </div>

                            <div class="column is-one-quarter" style={text}>

                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>
    )
}

export default About