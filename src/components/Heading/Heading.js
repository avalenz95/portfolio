import React from 'react'
import Badge from '../Badge/Badge.js'

function Heading(props) {
    const {name} = props

    const style = {
        h1: {
            color: 'white'
        },

        icon: {

        },
        button: {
            backgroundColor: 'transparent',
            border: 'none'
        }

    }

    return(
        <div class="columns">
                <div class="column is-four-fifths">
                    <h1 class="title is-1" style={style.h1}>
                        {name}
                    </h1>
                </div>
                <div class="column">
                    <a className="button is-large" style={style.button} href="#">
                        <span className="icon is-large">
                            <img className="is-rounded" src={`${process.env.PUBLIC_URL}icons/chevron-back-icon.svg`} alt="return"/>
                        </span>
                    </a>
                </div>
        </div>
    )
}

export default Heading