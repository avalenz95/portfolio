import React from 'react'

//Represents a panel block on dashboard (about me, projects, articles)
function Panel(props) {
    const { title, description, bgColor} = props

    const style = {
        box: {
          height: '100%',
          backgroundColor: bgColor
        },

        title: {
            fontSize: '30px',
        },

      }


    return (
        <div className="box is-fullwidth" style={style.box}>
            <h1 style={style.title}> {title} </h1>
            <p>{description}</p>
          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </div>

    )
}

export default Panel

