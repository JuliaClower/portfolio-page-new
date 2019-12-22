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
            </div>
        )
    }
}
