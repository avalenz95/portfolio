import React from "react";
import Particles from "react-particles-js";


function ParticleBackground() {
    return(
        <div
            style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
            }}
        
        >
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                        }
                    }
                }} 
            />
        </div>
)
}

export default ParticleBackground
