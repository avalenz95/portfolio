import React from 'react'
import Heading from '../Heading/Heading.js'

function Articles(props) {
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
            <Heading name="Articles"/>

            <div class="columns">
                <div class="column is-three-quarters">
                    <p class="title is-2">
                        Title 2
                    </p>
                        <p class="subtitle is-4">
                            Subtitle 4
                        </p>
                </div>
                <div class="column">Auto</div>
                <div class="column">Auto</div>
            </div>

        </div>
    )
}

export default Articles