import React from 'react'
import Heading from '../Heading/Heading.js'
import './About.css'
import { motion } from "framer-motion";


const transition = {
    duration: 1,
    ease: [0.43, 0.13, 0.23, 0.96]
  }
  
  const variants = {
    exit: { y: "50%", opacity: 0, transition },
    enter: {
      y: "0%",
      opacity: 1,
      transition
    }
  }
  

function About() {

    return (

            <motion.div className="container" initial="exit" animate="enter" exit="exit" variants={variants}>
                <Heading name="About Me"/>
                    <h1>My Background...</h1>
                    <p> Hi! My name is Audaris Blades. The pronuciation probably isn't what you expect though, (Ow-Dar-Reese Blah-dez) but you can just call me Audi.</p>
                    <p> I'm currently a Computer Science student at Dominican University of Calfornia. Though I grew up in Nashville, Tennessee where I spent a lot of time tinkering with anything and everything I could get my hands on. When I finally got my first computer at the tail end of middle school, I was hooked.
                    I was amazed by all the things that could be done. A simple click to open an application, the tactile feedback from a keyboard. All of that and more made me want to learn about how to use and create some of the cool
                    things this little box could do. So I researched, read and learned all I could. Starting out with the more basic stuff like what are the components that make a computer, eventually moving on up to how those compontents talk/work togther.
                    That's how my passion for computers and techonology came to be and to this day I still have that fire. Every day I feel like I can learn something new, expand my knowledge, learn different approaches, tradeoffs to certain algorithms, libraries, implementations,
                    the areas are endless. For that reason alone I knew I wanted to have a career in techonology. It's one that I know I'll never be bored with.</p>


                    <h1>My Ambtions...</h1>
                    <p> As I mentioned a bit earlier I'm currently finishing up my C.S Degree going into my senior year. Right out of school I really want to be a software developer here in the Greater Nashville Area that works on creating and integrating microservices(ideally written in Golang but I'm not picky.) Into a companies infrastrcture.
                    Why Microservices? Well I think Microservices have a lot of benefits when utilized properly. This first one that comes to mind is that microservices can help replace and speed up certain aspects of legacy hardware without requiring a full on rewrite and the disruption of many services.
                    At the end of the day though I'd be content with any sort of Software Development role where I can commit to codebase and feel like I'm contributing to some sort of end goal. I'd also like to have an application with a small size userbase that I maintain in my freetime. I think my Relevant for Reddit project has a lot of potential in that regard but we'll see.

                    As for future career, I'd like to move up to a senior development role and after being in that position for awhile, I'd potentially like to either get my MBA or try and start my own venture but that's all super far out thinking. :)</p>


                    <h1>Closing Notes...</h1>
                    <p>Thanks for dropping by my page. Please feel free to check out any of my projects and if any of what I've said is of interest to you please don't hesitate to reach out. You can reach me at audaris@gmail.com.</p>


            </motion.div>
    )
}

export default About