import React from 'react'

//Represents a panel block on dashboard (about me, projects, articles)
function Panel(props) {
    const { title, description, bgColor, image} = props

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
            textDecoration: 'underline',

        },

        desc: {

        },

      }


    return (
        <div className="panel" style={style.panel}>
            <div className="box" style={style.box}>
                <div className="desc" style={style.desc}>
                    <p>{description}</p>
                </div>
                <div className="title" style={style.title}>
                    <h1> {title} </h1>
                </div>
            </div>
        </div>

    )
}

export default Panel

