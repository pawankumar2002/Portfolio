import React from 'react'
import './css/About.css'
import './css/container.css'

const About = () => {
    return (
        <div className='container' id='about' style={{backgroundColor:"rgba(149, 1, 1,0.4)"}}>
            <div className='about'>
                <h1>About Me</h1>
                <p>
                    I am Pawan Kumar <br /><br /> A B.Tech Student in Department of Electrical and Electronics Engineering, at Indian Institute of Technology, Patna, Bihar, India
                </p>
                <p>
                    My Hobbies are playing football, listening music, studying books, programming,
                    and web development
                </p>
            </div>
        </div>

    )
}

export default About
