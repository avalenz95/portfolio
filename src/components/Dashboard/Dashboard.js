import React, { useState } from 'react'
import Panel from '../Panel/Panel.js'
import About from '../About/About.js'
import Projects from '../Projects/Projects.js'
import Articles from '../Articles/Articles.js'
import { Link } from 'react-router-dom'

//Represents homepage grid
function Dashboard() {

   /* // set view states
    const[values, setValue] = useState({
        showView: false, 
        viewName: "",
        bgColor: "",
    })
    
    //Handle changing the view values
    function handleView(newValues) {
        setValue(newValues)
    }*/

    //Default Dashboard
    return (
        <div className="Dashboard container">
            <div className="columns">

                {/* About Me */}
                <div className="column is-one-quarter">
                    <Link to={'/About'}>
                        <Panel 
                            title="About Me"
                            bgColor = 'rgb(187,61,32, .8)'
                            description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis."
                            image = {`${process.env.PUBLIC_URL}/images/me.jpeg`}
                            /* Pass callback to child */
                            viewName="About"
                            //values={values}
                            //onChange={handleView}
                        />
                    </Link>
                </div>

                {/* Projects */}
                <div className="column is-three-quarters">
                    <Panel 
                        title="Projects"
                        bgColor = 'rgb(23,134,68)'
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis."
                        viewName="Projects"
                        //values={values}
                        //onChange={handleView}
                    />
                </div>
            </div>

            {/* Articles */}
            <div className="columns">
                <div className="column is-full">
                    <Panel 
                        title="Articles"
                        bgColor = 'rgb(24,89,118)'
                        description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis."
                        viewName="Articles"
                        //values={values}
                        //onChange={handleView}
                    />
                </div>
            </div>

        </div>
    )
//Expand Views
} /*else if (values.viewName === "About") {
    return ( 
        <div className="Dashboard container">
            <About bgColor="rgb(187,61,32)" /> 
        </div>
    )

} else if (values.viewName === "Projects") {
    return (
        <div className="Dashboard container">
            <Projects bgColor={values.bgColor} /> 
        </div>
    )

} else if (values.viewName === "Articles"){
        return ( 
            <div className="Dashboard container">
                <Articles bgColor={values.bgColor} /> 
            </div>
        )
}
}*/


export default Dashboard