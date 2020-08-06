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
                height: "100%",
                zIndex: 0,
                backgroundColor: "black",
            }}
        
        >
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 70
                        },
                        "size": {
                            "value": 4
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
