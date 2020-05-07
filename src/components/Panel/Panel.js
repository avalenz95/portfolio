import React from 'react'
import './Panel.css'
import { Link } from "react-router-dom";


//Represents a panel block on dashboard (about me, projects, articles)
function Panel(props) {
    const { title, description, bgColor, image, viewName} = props

    const style = {
        panel: {backgroundImage: `url(${image})`,
        backgroundColor: bgColor,
        }
    }

    return (
            <div className="panel" style={style.panel}>
                <Link className="box" to={`/${viewName}`}>
                        <div className="description">
                            <p>{description}</p>
                        </div>

                        <div className="title">
                            <h1> {title} </h1>
                        </div>
                </Link>
            </div>
    )
}

export default Panel

