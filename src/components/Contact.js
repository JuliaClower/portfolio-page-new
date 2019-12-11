import React, { Component } from 'react'
import emailIcon from "/Users/juliaclower/ga-sei/updated-resume/portfolio-app/src/Images/circle-email-icon.png"
import githubIcon from "/Users/juliaclower/ga-sei/updated-resume/portfolio-app/src/Images/github-icon.png"
import linkedinIcon from "/Users/juliaclower/ga-sei/updated-resume/portfolio-app/src/Images/linkedin-icon.png"
import resumeIcon from "/Users/juliaclower/ga-sei/updated-resume/portfolio-app/src/Images/resume.png"

export default class Footer extends Component {
    render() {
        return (
            <div className="aboutPageMain">
                <div className='say-hello-div'> <h1 className="hellowords">Say Hello, </h1></div>
                <div className="outeraboutBox">
                    <div className="contact-icons">
                        <h1></h1>
                        <div className="contact-top-row">
                            <a href="mailto:juliavanclower@gmail.com" target="_blank">
                                <img alt="email icon" src={emailIcon} /> <h3>JuliaVanClower@gmail.com</h3>
                            </a>
                            <a href="https://github.com/JuliaClower" target="blank">
                                <img alt="github icon" src={githubIcon} /> <h3>github.com/JuliaClower</h3>
                            </a>
                        </div>
                        <div className="contact-bottom-row">
                            <a href="https://www.linkedin.com/in/juliavanclower/" target="blank">
                                <img alt="linkedin icon" src={linkedinIcon} /> <h3>linkedin.com/in/juliavanclower/ </h3>
                            </a>
                            <a href="https://docs.google.com/document/d/1Uga481QOGNLg1TlUHGwxAzg9iQajox58en0XweD30_U/edit?usp=sharing" target="blank">
                                <img alt="resume icon" src={resumeIcon} /> <h3> Download a copy of my resume.</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
