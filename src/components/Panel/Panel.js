import React from 'react'

//Represents a panel block on dashboard (about me, projects, articles)
function Panel(props) {
    const { title, description, bgColor} = props

    const style = {
        box: {
          height: '100%',
          backgroundColor: bgColor,
          color: 'white',
        },

        title: {
            fontSize: '30px',
            color: 'white',
        },

      }


    return (
        <div className="box is-fullwidth" style={style.box}>
            <h1 className="title" style={style.title}> {title} </h1>
            {description}
        </div>

    )
}

export default Panel

