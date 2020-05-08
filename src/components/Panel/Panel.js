import React, {useState} from 'react'
import './Panel.css'
import { Redirect } from "react-router-dom";


//Represents a panel block on dashboard (about me, projects, articles)
function Panel(props) {
    const { title, description, bgColor, image, viewName} = props

    const style = {
        panel: {backgroundImage: `url(${image})`,
        backgroundColor: bgColor,
        }
    }

    //Add state to redirect user on click
    const [toView, setView] = useState(false)
    function redirect(event) {
        event.preventDefault()
        setView(true)
    }

    return (
            <div className="panel" onClick={redirect} style={style.panel}>
                {toView ? <Redirect push to={`/${viewName}`}/> : null}
                            <div className="description">
                                <p>{description}</p>
                            </div>
                            <div className="title">
                                <h1> {title} </h1>
                            </div>
            </div>
    )
}

export default Panel

