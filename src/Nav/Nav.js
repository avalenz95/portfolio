import React from 'react'

function Nav() {
    return (
        <nav className="navbar is-transparent">
            <div className="navbar-end">
            <div className="navbar-item">
                <div className="field is-grouped">

                    <p className="control">
                        <a className="button is-primary" href="https:www.medium.com/ablades">
                        <span className="icon">
                            <img className="is-rounded" src={`${process.env.PUBLIC_URL}icons/medium-icon.svg`} alt="github"/>
                        </span>
                        <span>Medium</span>
                        </a>
                    </p>

                    <p className="control">
                        <a className="button is-primary" href="https:www.medium.com/ablades">
                        <span className="icon">
                            <img className="is-rounded" src={`${process.env.PUBLIC_URL}icons/linkedin-icon.svg`} alt="github"/>
                        </span>
                        <span>Linkedin</span>
                        </a>
                    </p>

                    <p className="control">
                        <a className="button is-primary" href="https:www.github.com/ablades">
                        <span className="icon">
                            <img className="is-rounded" src={`${process.env.PUBLIC_URL}icons/github-icon.svg`} alt="github"/>
                        </span>
                        <span>Github</span>
                        </a>
                    </p>

                    {/* ADD DOWNLOAD AND RESUME */}
                    <p className="control">
                        <a className="button is-primary" href="https:www.medium.com/ablades">
                        <span className="icon">
                            <img className="is-rounded" src={`${process.env.PUBLIC_URL}icons/resume-icon.svg`} alt="github"/>
                        </span>
                        <span>Resume</span>
                        </a>
                    </p>
                </div>
            </div>
            </div>
        </nav>

    )
}

export default Nav
