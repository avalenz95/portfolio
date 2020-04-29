import React from 'react'

//Represents a panel block on dashboard (about me, projects, articles)
function Panel() {
    return (
        <div className="card">
            <div className="card-content">
                <p className="title">
                “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                </p>
                <p className="subtitle">
                Jeff Atwood
                </p>
            </div>
            <footer className="card-footer">
                <p class="card-footer-item">
                <span>
                    View on <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
                </span>
                </p>
                <p className="card-footer-item">
                </p>
            </footer>   
        </div>
    )
}

export default Panel