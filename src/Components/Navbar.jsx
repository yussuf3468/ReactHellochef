import React from 'react'
import logo from '../assets/hello.svg'
import NarrowButton from './NarrowButton'

function Navbar() {
    return (
        <nav>
            <img src={logo} alt="" />
            <ul>
                <li>
                    <a href="">Our plans</a>
                </li>
                <li>
                    <a href="">Weekly Menu</a>
                </li>
                <li>
                    <a href="">How It Works</a>
                </li>
                <NarrowButton text1={"Sign in"}/>
            </ul>
        </nav>
    )
}

export default Navbar