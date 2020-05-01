import React, { useState } from 'react'
import Panel from '../Panel/Panel.js'
import About from '../About/About.js'
import Projects from '../Projects/Projects.js'
import Articles from '../Articles/Articles.js'

//Represents homepage grid
function Dashboard() {
    // set view states
    const[values, setValue] = useState({showView: false, viewName: ""})
    console.log(values)
    
    //Handle changing the view values
    function handleView(newValues) {
        setValue(newValues)
        console.log(newValues)
    }

    //Default Dashboard
    if (values.showView === false) {
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
                            values={values}
                            onChange={handleView}
                        />
                    </div>
    
                    {/* Projects */}
                    <div className="column is-three-quarters">
                        <Panel 
                            title="Projects"
                            bgColor = 'rgb(105,251,136)'
                            description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis."
                            viewName="Projects"
                            values={values}
                            onChange={handleView}
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
                            viewName="Articles"
                            values={values}
                            onChange={handleView}
                        />
                    </div>
                </div>
    
            </div>
        )
    //Expand Views
    } else if (values.viewName === "About") {
        return ( <About /> )

    } else if (values.viewName === "Projects") {
        return ( <Projects /> )

    } else if (values.viewName === "Articles"){
            return ( <Articles /> )
    }
}


export default Dashboard