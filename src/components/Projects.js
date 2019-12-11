import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
            <div className="main-page">
                <div className="scroll-box">
                    <div className="Project">
                        <div className="top-divs">
                            <div className="top-left-div">
                                <h1>DevDisquisitions</h1>
                                <br/>
                                <div className="button">
                                    <a target="_blank" href={'https://dev-disquisitions.herokuapp.com/'}>Deployed App</a>
                                </div>
                                <div className="button">
                                    <a target="_blank" href={'https://github.com/JuliaClower/Dev-Disquisitions'}>View on Github</a>
                                </div>
                            </div>
                            <div className="top-right-div">
                                <p>This app is intended to be used by individuals who are learning to code, or those who want to share their educational resources. <br/> <br/>
                                Built with React, Axios, MongoDB, Mongoose, JS, HTML, and CSS</p>
                            </div>
                        </div>
                        <div className="bottom-div-1"></div>
                        <div className="scroll-icon"> >>> </div>
                    </div>
                    <div className="Project">
                        <div className="top-divs">
                            <div className="top-left-div">
                                <h1>DateGenerator</h1>
                                <br/>
                                <div className="button">
                                    <a target="_blank" href={'https://dev-disquisitions.herokuapp.com/'}>Deployed App</a>
                                </div>
                                <div className="button">
                                    <a target="_blank" href={'https://github.com/JuliaClower/Dev-Disquisitions'}>View on Github</a>
                                </div>
                            </div>
                            <div className="top-right-div">
                                <p>This app is intended to help the less-creative individual orchestrate a fun and eventful evening for their significant other or friends. 
                                    Date Generator will provide the user with choices to create a date in three categories: Drinks, Dinner, and Event. 
                                    he final Date can be named by the User, and saved to the Database. <br/> <br/>
                                    Created with React, Django, and SQL.</p>
                            </div>
                        </div>
                        <div className="bottom-div-2"></div>
                        <div className="scroll-icon"> >>> </div>

                    </div>
                    <div className="Project">
                        <div className="top-divs">
                            <div className="top-left-div">
                                <h1>AccessibilityAmy</h1>
                                <br/>
                                <div className="button">
                                    <a target="_blank" href={'https://pensive-wiles-dda265.netlify.com/'}>Deployed App</a>
                                </div>
                                <div className="button">
                                    <a target="_blank" href={'https://github.com/JuliaClower/Dev-Disquisitions'}>View on Github</a>
                                </div>
                            </div>
                            <div className="top-right-div">
                                <p>This app is a remix of the classic Simon game. The theme of Accessibility Amy is to allow individuals with disabilities to enjoy the game. 
                                   Accessible Amy seeks to replace the traditional color reference with a pattern/texture reference. <br/><br/>
                                   Created with VanillaJS, CSS, and HTML</p>
                            </div>
                        </div>
                        <div className="bottom-div-3"></div>
                        <div className="scroll-icon"> >>> </div>

                    </div>
                    <div className="Project">
                        <div className="top-divs">
                            <div className="top-left-div">
                                <h1>Disavailability</h1>
                                <br/>
                                <div className="button">
                                    <a target="_blank" href={'https://mysterious-retreat-91657.herokuapp.com/'}>Deployed App</a>
                                </div>
                                <div className="button">
                                    <a target="_blank" href={'https://github.com/JuliaClower/Dev-Disquisitions'}>View on Github</a>
                                </div>
                            </div>
                            <div className="top-right-div">
                                <p>Disavailability is online database where users can store and share data about their experiences with others.  
                                    The Disavailability database is a user-vetted listing of restaurants, products, doctors, or shopping centers that have helped users with various limitations or disabilities. 
                                    <br/><br/>Created with JS, HTML, CSS, MongoDB, and Mongoose.</p>
                            </div>
                        </div>
                        <div className="bottom-div-4"></div>
                        <div className="scroll-icon"></div>

                    </div>
                </div>
            </div>
        )
    }
}
