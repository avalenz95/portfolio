import React from 'react'
import Panel from '../Panel/Panel.js'
import './Dashboard.css'
// import { ReactComponent as StreakSVG } from './streak.svg';
//Represents homepage grid
function Dashboard() {

    return (
        <div className="dashboard">

            {/* About Me */}
            <div className="about">
                    <Panel 
                        title="About Me"
                        bgColor = 'rgb(187,61,32, .8)'
                        description = "Welcome to my portfolio website! Click here to learn more about me and my interests."
                        image = {`${process.env.PUBLIC_URL}/images/me.jpeg`}
                        viewName="About"
                    />
            </div>

            { /* Projects */ }
            <div className="projects">
                    <Panel 
                        title="Projects"
                        bgColor = 'rgb(23,134,68, .9)'
                        description = "This section is where I showcase both my active and previous work in more detail than on github. If you'd like to learn more about specific projects click here!"
                        image = "./streak.svg"
                        viewName="Projects"
                    />
                    {/*
                    <div className="streak">
                        <StreakSVG />
                    </div>*/}
            </div>

            {/* Articles */}
            <div className="articles">
                    <Panel 
                        title="Articles"
                        bgColor = 'rgb(24,89,118, .9)'
                        description = "My articles can be found on my medium page. This section gives a high level overview of the articles and the inspiration behind each of them."
                        viewName="Articles"

                    />
            </div>

            {/* DIY */}
            <div className="diy">
                    <Panel 
                        title="DIY"
                        bgColor = 'rgb(255,135,0, .9)'
                        description = "This section is still under construction. (No pun intended.) This will be where I showcase the various crafts I make myself."
                        viewName=""
                    />
            </div>
        </div>
    )
}

export default Dashboard
