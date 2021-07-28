import React from "react"

function About() {
    return(
        <div class="about-container">
            <div class="about-intro">
            <h1> About me </h1>
            <p> Hello again, it's me! A sophomore at the Georgia Institute of Technology who is
                majoring in Computer Science with a specialization in Intelligence and People.
                I also have an inclination towards WebDev where I explore my creative side.
                <br />
                <br />
                Aside from this, I am also a proud sportsperson with over 30 titles in various sportsperson
                and a drummer since 5 years. </p>
            </div>
            <div className="picture">
            <img src="../Sacchit_Tennis.jpg" align="right" alt="Sacchit Playing Tennis" />
             </div>
        </div>
    )
}

export default About;