import React, { useState } from 'react'
import Panel from '../Panel/Panel.js'
import About from '../About/About.js'

//Represents homepage grid
function Dashboard() {
    /*set states*/
    const[value, setValue] = useState({showView: false, viewName: ""})
    //const[viewName, setName] = useState("")
    console.log(value)
    /*function to change state*/
    function handleChange(newValue) {
        setValue(newValue)
        console.log(newValue)
    }


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
                        /* Pass callback to child */
                        viewName="About"
                        value={value}
                        onChange={handleChange}
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