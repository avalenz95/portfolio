import React from 'react'
// eslint-disable-next-line no-lone-blocks
{/* FIGURE OUT HOW TO CHANGE SVG COLOR maybe create css file? */}
function Badge(props) {

    const { name, location, alt, href} = props

    return (
        <p className="control">
            <a className="button is-primary" href={href}>
                <span className="icon">
                    <img className="is-rounded" src={`${process.env.PUBLIC_URL}${location}`} alt={alt}/>
                </span>

                {/* Render only if name exists */}
                {name ? <span>{name}</span> : ''}

            </a>
        </p>
    )
}

export default Badge