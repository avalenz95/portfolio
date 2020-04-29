import React from 'react'
import Panel from '../Panel/Panel.js'

//Represents homepage grid
function Dashboard() {
    return (
        <div className="Dashboard container">
            <div className="columns">

                {/* About Me */}
                <div className="column is-one-quarter">
                    <Panel 
                        title="About Me"
                        bgColor = 'rgb(255, 0, 255)'
                    />
                </div>

                {/* Projects */}
                <div className="column is-three-quarters">
                    <Panel 
                        title="Projects"
                    />
                </div>
            </div>

            {/* Articles */}
            <div className="columns">
                <div className="column is-full">
                    <Panel 
                        title="Articles"
                    />
                </div>
            </div>

        </div>
    )
}


export default Dashboard