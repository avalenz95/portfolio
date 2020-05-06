import React from 'react'
//import Badge from '../Badge/Badge.js'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

const transition = {
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96]
}

const backVariants = {
    exit: { x: 100, opacity: 0, transition },
    enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
}

function Heading(props) {
    const {name} = props

    const style = {
        h1: {
            color: 'white'
        },

        icon: {

        },
        button: {
            backgroundColor: 'transparent',
            border: 'none'
        }

    }

    return(
        <div className="columns">
                <div className="column is-four-fifths">
                    <h1 className="title is-1" style={style.h1}>
                        {name}
                    </h1>
                </div>
                <div className="column">
                    <motion.div className="back" variants={backVariants}>
                        <Link to="/" style={style.button}>
                            <button className="button is-large" style={style.button} href="#">
                                <span className="icon is-large">
                                    <img className="is-rounded" src={`${process.env.PUBLIC_URL}icons/chevron-back-icon.svg`} alt="return"/>
                                </span>
                            </button>
                        </Link>
                    </motion.div>
                </div>
        </div>
    )
}

export default Heading