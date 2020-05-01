import React from 'react'
import Heading from '../Heading/Heading.js'

function About(props) {
    const {bgColor} = props

    const style = {
        box: {
            height: '100%',
            backgroundColor: bgColor,
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        
    }

    return (
        <div className="box" style={style.box}>
            <Heading name="About Me"/>

            <div class="columns">
                <div class="column is-three-quarters">
                    <p class="title is-3">
                        My Background
                    </p>
                    
                    <p class="subtitle is-5">
                        I grew up in Nashville, Tennessee........
                    </p>
                </div>

                <div class="column is-one-quarter">

                </div>
            </div>

        </div>
    )
}

export default About