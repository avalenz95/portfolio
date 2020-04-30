import React from 'react'

function Footer() {
    const style = {
        footer: {
            paddingTop: '20px',
        }
    }


    return (
        <footer className="footer" style={style.footer}>
            <div className="content has-text-centered">
                <p>
                    ABLADES.DEV by Audaris 'Audi' Blades
                </p>
            </div>
        </footer>
    )
}

export default Footer