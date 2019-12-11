import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css';


export default class HeadBar extends Component {
    render() {
        return (
            <div className="header">
                <div>
                    <div id="bigname" className='name'>
                        J V C
                </div>
                    <div id='littlename' className='name'>
                        Julia Van Clower
                </div>
                </div>
                <div className="navItems">
                    <NavLink className="navLinks" to={'/about'}>About</NavLink>
                    <NavLink className="navLinks" to={'/projects'}>Projects</NavLink>
                    <NavLink className="navLinks" to={'/contact'}>Contact</NavLink>
                </div>
            </div>
        )
    }
}
