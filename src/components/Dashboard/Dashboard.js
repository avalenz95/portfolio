import React from 'react'
import Panel from '../Panel/Panel.js'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
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
             <motion.div
                className="thumbnails"
                initial="initial"
                animate="enter"
                exit="exit"
                variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
            >
            <div className="columns">

                {/* About Me */}
                <div className="column is-one-quarter">
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
                </div>

                {/* Projects */}
                <div className="column is-three-quarters">
                    <Link to={'/Projects'}>
                        <Panel 
                            title="Projects"
                            bgColor = 'rgb(23,134,68)'
                            description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis."
                            viewName="Projects"
                            //values={values}
                            //onChange={handleView}
                        />
                    </Link>
                </div>
            </div>

            {/* Articles */}
            <div className="columns">
                <div className="column is-full">
                    <Link to={'/Articles'}>
                        <Panel 
                            title="Articles"
                            bgColor = 'rgb(24,89,118)'
                            description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis."
                            viewName="Articles"
                            //values={values}
                            //onChange={handleView}
                        />
                    </Link>
                </div>
            </div>
            </motion.div>
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