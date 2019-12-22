import React, { Component } from 'react'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

export default class Hello extends Component {
    render() {
        return (
            <div>
                <About />
                <Projects />
                <Contact />
            </div>
        )
    }
}
