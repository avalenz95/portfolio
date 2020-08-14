import React, {useState} from 'react'
import './Panel.css'
import { Redirect } from "react-router-dom";
import { motion } from "framer-motion";

//Effects
const animations={
    scale: [0, 1],
}
const transitions={ 
    ease: "easeIn",
    duration: 2
}

//Represents a panel block on dashboard (about me, projects, articles)
function Panel(props) {
    const { title, description, bgColor, image, viewName, link} = props

    const style = {
        panel: {backgroundImage: `url(${image})`,
        backgroundColor: bgColor,
        }
    }

    //Add state to redirect user on click
    const [toView, setView] = useState(false)
    function redirect(event) {
        event.preventDefault()
        if (link) {
            window.location.assign(viewName)
        } else {
            setView(true)
        }
    }

    return (

            <motion.div className="panel" onClick={redirect} style={style.panel} animate={animations} transition={transitions} exit={{ opacity: 0 }}>
                {toView ? <Redirect push to={`/${viewName}`}/> : null}
                
                <div className="description">
                    <p>{description}</p>
                </div>
                <div className="title">
                    <h1> {title} </h1>
                    
                </div>
            </motion.div>
    )
}

export default Panel

