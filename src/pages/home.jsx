import React from "react";
import { useSelector } from "react-redux";



import "./home.css"
import Section from "../components/cards/cards";

const Home = () => {

    const event = useSelector(state => state.event)
    return (
        <>
            <div className="home-container" >
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