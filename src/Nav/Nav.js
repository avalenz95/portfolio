import React from 'react'

function Nav() {
    return (
        <nav className="navbar is-transparent">
            <div className="navbar-end">
            <div className="navbar-item">
                <div className="field is-grouped">
                <p className="control">
                <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.8.2/bulma-0.8.2.zip">
        
                </a>
                </p>
                <p className="control">
                    <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.8.2/bulma-0.8.2.zip">
                    <span className="icon">
                    <i className="fab fa-github"></i>
                    </span>
                    <span>Download</span>
                    </a>
                </p>
                </div>
            </div>
            </div>
        </nav>

    )
}

export default Nav
