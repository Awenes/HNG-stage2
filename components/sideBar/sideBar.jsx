import React from "react";

import '../movies/movies.css'

import { useState } from "react";

import {FaTv, FaHome, FaVideo, FaCalendar} from "react-icons/fa"
import {RiLogoutBoxLine} from "react-icons/ri"

function SideBar() {
    const [toggle, setToggle] = useState(false);
    console.log(toggle)

    function toggler(){
        setToggle(true)
        if(toggle){
            setToggle(false)
        }
        
    }
    


    return <div>
        <div className="menu" id="burger-a" onClick={() => toggler()}>
            <div class="burger-a">
            <div class="line-a"></div>
            <div class="line-a"></div>
        </div>
        </div>

        {
            !toggle ?( <div className="side-bar" id="side-bar">
            <div className="logo"><FaTv style={{
                        width: '24px',
                        height: '24px',
                        padding: '5px',
                        color: 'white',
                        backgroundColor: 'red',
                        borderRadius: '50%'
                    }} />&nbsp; &nbsp;
            <h3>MovieBox</h3>
            </div>
            <div className="side">
                <div className="item">
                    <FaHome style={{
                        width: '24px',
                        height: '24px',
                        padding: '5px',
                        marginTop: '10px',
                        color: 'black',
                        backgroundColor: 'white',
                        borderRadius: '50%'
                    }} />&nbsp; &nbsp;
                    <h3>Home</h3>
                </div>
                <div className="item">
                    <FaVideo style={{
                        width: '24px',
                        height: '24px',
                        padding: '5px',
                        marginTop: '10px',
                        color: 'black',
                        backgroundColor: 'white',
                        borderRadius: '50%'
                    }} />&nbsp; &nbsp;
                    <h3>Movies</h3>
                </div>
                <div className="item">
                    <FaTv style={{
                        width: '24px',
                        height: '24px',
                        padding: '5px',
                        marginTop: '10px',
                        color: 'black',
                        backgroundColor: 'white',
                        borderRadius: '50%'
                    }} />&nbsp; &nbsp;
                    <h3>Tv Series</h3>
                </div>
                <div className="item">
                    <FaCalendar style={{
                        width: '24px',
                        height: '24px',
                        padding: '5px',
                        marginTop: '10px',
                        color: 'black',
                        backgroundColor: 'white',
                        borderRadius: '50%'
                    }} />&nbsp; &nbsp;
                    <h3>Tv Series</h3>
                </div>
                <div className="text">
                    <h4>Play movie quizzes and earn prizes.</h4>
                    <h5>50k people are playing right now.</h5>
                    <button>Start Playing</button>
                </div>
                <div className="item">
                    <RiLogoutBoxLine style={{
                        width: '24px',
                        height: '24px',
                        padding: '5px',
                        marginTop: '10px',
                        color: 'black',
                        backgroundColor: 'white',
                        borderRadius: '50%'
                    }} />&nbsp; &nbsp;
                    <h3>Log Out</h3>
                </div>
            </div>
        </div>):<div></div>
        }
        
    </div>
}

export default SideBar