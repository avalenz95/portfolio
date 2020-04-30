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
                        bgColor = 'rgb(251,136,105,.5)'
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis."
                        image = {`${process.env.PUBLIC_URL}/images/me.jpeg`}
                    />
                </div>

                {/* Projects */}
                <div className="column is-three-quarters">
                    <Panel 
                        title="Projects"
                        bgColor = 'rgb(105,251,136)'
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis."
                    />
                </div>
            </div>

            {/* Articles */}
            <div className="columns">
                <div className="column is-full">
                    <Panel 
                        title="Articles"
                        bgColor = 'rgb(105,220,251)'
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis."
                    />
                </div>
            </div>

        </div>
    )
}


export default Dashboard