import React from 'react'
import Badge from '../Badge/Badge.js'

function Nav() {

    return (
        <nav className="navbar is-transparent">
            <div className="navbar-end">
            <div className="navbar-item">
                <div className="field is-grouped">
                    <Badge
                        location = "icons/medium-icon.svg"
                        alt = "medium"
                        href = "https://medium.com/@ablades"
                    />

                    <Badge
                        location = "icons/github-icon.svg"
                        alt = "github"
                        href = "https://github.com/ablades"
                    />

                    <Badge
                        location = "icons/linkedin-icon.svg"
                        alt = "linkedin"
                        href = "https://linkedin.com/in/ablades"
                    />
                    
                    {/* ADD DOWNLOAD AND RESUME */}
                    <Badge
                        location = "icons/resume-icon.svg"
                        alt = "resume"
                        href = ""
                        name = "Resume"
                    />

                </div>
            </div>
            </div>
        </nav>

    )
}

export default Nav
