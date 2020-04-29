import React from 'react'
import './Panel.css'

//Represents a panel block on dashboard (about me, projects, articles)
function Panel() {
    return (
        <div className="box is-fullwidth">
            <p>
          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </p>
        </div>

    )
}

export default Panel