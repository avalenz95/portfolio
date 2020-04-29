import React from 'react'

function Badge(props) {
    {/*FIGURE OUT HOW TO CHANGE SVG COLOR maybe create css file?*/}
    const { name, location, alt, href} = props

    return (
        <p className="control">
            <a className="button is-primary" href={href}>
                <span className="icon">
                    <img className="is-rounded" src={`${process.env.PUBLIC_URL}${location}`} alt={alt}/>
                </span>
                <span>{name}</span>
            </a>
        </p>
    )
}

export default Badge