import React from 'react'
import './Panel.css'


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
    function handleView(event) {
        event.target.values = {
            showView: true, 
            viewName: viewName, 
            bgColor: bgColor
        }
        
        props.onChange(event.target.values);
    }

    return (
        <div className="panel" onClick={handleView} style={style.panel}>

            <div className="box" style={style.box}>

                <div className="desc" style={style.desc}>
                    <p>{description}</p>
                </div>

                <div className="title" id="title" style={style.title}>
                    <h1> {title} </h1>
                </div>

            </div>

        </div>

    )
}

export default Panel

