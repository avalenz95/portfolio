import React from 'react'
import Panel from '../Panel/Panel.js'
import { motion } from "framer-motion"
import './Dashboard.css'
//Represents homepage grid
function Dashboard() {

    return (
        <div className="dashboard">

            {/* About Me */}
            <div className="about">
                    <Panel 
                        title="About Me"
                        bgColor = 'rgb(187,61,32, .8)'
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis."
                        image = {`${process.env.PUBLIC_URL}/images/me.jpeg`}
                        /* Pass callback to child */
                        viewName="About"
                        //values={values}
                        //onChange={handleView}
                    />
            </div>

            {/* Projects */}
            <div className="projects">
                    <Panel 
                        title="Projects"
                        bgColor = 'rgb(23,134,68)'
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis."
                        viewName="Projects"
                        //values={values}
                        //onChange={handleView}
                    />
            </div>

            {/* Articles */}
            <div className="articles">
                    <Panel 
                        title="Articles"
                        bgColor = 'rgb(24,89,118)'
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis."
                        viewName="Articles"
                        //values={values}
                        //onChange={handleView}
                    />
            </div>
            
            <motion.div
                className="thumbnails"
                initial="initial"
                animate="enter"
                exit="exit"
                variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
            >

            </motion.div>
        </div>
    )
}

export default Dashboard
