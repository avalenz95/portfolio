import React from "react";
import Particles from "react-particles-js";


function ParticleBackground() {
    return(
        <div
            style={{
                position: "absolute",
                width: "100%",
                height: "110%",
                top:0,
                bottom:0,
                left:0,
                right:0,
                overflow: "hidden",
                zIndex: 0,
                backgroundColor: "black",
            }}
        
        >
            <Particles 
                height={window.outerHeight}
                params={{
                    "particles": {
                        "number": {
                            "value": 100
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
