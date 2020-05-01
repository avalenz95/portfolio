import React from 'react'

function Heading(props) {
    const {name} = props

    const style = {
        h1: {
            color: 'white'
        }

    }

    return(
        <div class="columns">
                <div class="column is-full">
                    <h1 class="title is-1" style={style.h1}>
                        {name}
                    </h1>
                </div>
        </div>
    )
}

export default Heading