import React from "react";
import { useSelector } from "react-redux";
import eventImage from '../images/image2.jpeg';
import { Card } from 'antd';

import "./home.css"
import Section from "../components/cards/cards";

const Home = () => {

    const event = useSelector(state => state.event)
    return (
        <>
            <div className="home-container"  style={{ backgroundImage: `url(${eventImage})` }} >
                <div className="hero">
                    <h2 className="title">{event.title}</h2>
                    <p className="description">{event.description}</p>
                    <button className="buy-now">{event.buttonText}</button>
                </div>
            </div>
        <Section/>
            
        </>
    )
}

export default Home