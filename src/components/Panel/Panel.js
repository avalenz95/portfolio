import React from 'react'
import './Panel.css'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const transition = { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] }

const variants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition }
  }
}

const frameVariants = {
  hover: { scale: 0.95 }
}


//Represents a panel block on dashboard (about me, projects, articles)
function Panel(props) {
    const { title, description, bgColor, image, viewName} = props

    const style = {
        panel: {backgroundImage: `url(${image})`,
        backgroundColor: bgColor,
        height: '100%',
        color: 'white',
        }
    }


    return (
        <motion.div variants={variants}>
            <motion.div
                className="frame"
                whileHover="hover"
                variants={frameVariants}
                transition={transition}
             >
                 <Link to={`/${viewName}`}></Link>
                    <div className="panel" style={style.panel}>
                            <div className="desc">
                                <p>{description}</p>
                            </div>

                            <div className="title">
                                <h1> {title} </h1>
                            </div>
                    </div>
            </motion.div>
        </motion.div>

    )
}

export default Panel

