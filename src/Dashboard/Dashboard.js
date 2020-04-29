import React from 'react'
import Panel from '../Panel/Panel.js'

//Represents homepage grid
function Dashboard() {
    return (
        <div className="Dashboard container">
            <div className="columns">
                <div className="column is-one-quarter">
                    <Panel/>
                </div>
                <div className="column is-three-quarters">
                    <Panel/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard