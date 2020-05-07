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
        panel: {
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            height: '100%',
        },

        box: {
            height: '100%',
            backgroundColor: bgColor,
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },

        title: {
            fontSize: '30px',
            color: 'white',

        },

        desc: {

        },

      }
    

    //Child change view values and pass to parent
    /*function handleView(event) {
        event.target.values = {
            showView: true, 
            viewName: viewName, 
            bgColor: bgColor
        }
        
        props.onChange(event.target.values);
    }

    onClick={handleView}*/

    return (
        <motion.div variants={variants}>
            <motion.div
                className="frame"
                whileHover="hover"
                variants={frameVariants}
                transition={transition}
             >

                    <div className="panel" style={style.panel}>
                        <div className="box" style={style.box}>
                        <Link to={`/${viewName}`}>
                            <div className="desc" style={style.desc}>
                                <p>{description}</p>
                            </div>

                            <div className="title" style={style.title}>
                                <h1> {title} </h1>
                            </div>
                            </Link>
                        </div>
                    </div>
            </motion.div>

        </motion.div>

    )
}

export default Panel

