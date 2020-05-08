import React from 'react'
import './IconButton.css'
// eslint-disable-next-line no-lone-blocks
{/* FIGURE OUT HOW TO CHANGE SVG COLOR maybe create css file? */}
function IconButton(props) {

    const { name, location, alt, href} = props

    return (
        <button class="iconbutton" onclick={`window.location.href = ${href};`}>
            <img src={`${process.env.PUBLIC_URL}${location}`} alt={alt}/>
            {/* Render only if name exists */}
            {name ? <span>{name}</span> : ''}
        </button>
    )
}

export default IconButton