import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import './Home.css';
import { Link } from "react-router-dom";

class Home extends Component {
    //Initial State
    state = {};

    //Render the Component
    render() {
        return (
                <Jumbotron />
                );
            };
};



export default Home;