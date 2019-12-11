import React, { Component } from 'react'
import '../App.css';


export default class About extends Component {
    render() {
        return (
            <div className="aboutPageMain">
                <div className='push-div'></div>
                <div className="outeraboutBox">
                <div className="aboutPageBox">
                    <div className="aboutWords">
                        <div className='about-and-skills'>
                            <h1>My name is Julia.</h1>
                            <h3>I am a full-stack web developer and a former attorney. 
                                I chose to leave my previous career in the legal field after finding a passion for Code. The process of developing a functional creation is rewarding and addictive.  
                                I love learning and the exploration of unknown content. </h3>
                            <br/>
                            <h1>Skills</h1>
                            <br/>
                            <i class="devicon-git-plain"></i>
                            <i class="devicon-github-plain"></i>
                            <i class="devicon-css3-plain"></i>
                            <i class="devicon-django-plain"></i>
                            <i class="devicon-express-original"></i>
                            <i class="devicon-heroku-original"></i>
                            <br/>

                            <i class="devicon-html5-plain"></i>
                            <i class="devicon-javascript-plain"></i>
                            <i class="devicon-jquery-plain-wordmark"></i>
                            <i class="devicon-mongodb-plain-wordmark"></i>
                            <i class="devicon-nodejs-plain"></i>
                            <i class="devicon-postgresql-plain-wordmark"></i>
                            <br/>

                            <i class="devicon-python-plain"></i>
                            <i class="devicon-pycharm-plain"></i>
                            <i class="devicon-react-original-wordmark"></i>
                            <i class="devicon-slack-plain"></i>
                            <i class="devicon-trello-plain"></i>
                            <i class="devicon-visualstudio-plain"></i>

                        </div>
                    </div>
                    <div className="aboutPhoto">
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
