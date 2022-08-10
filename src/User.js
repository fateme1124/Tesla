import React, { Component } from 'react';

class User extends Component {
    constructor(){
        super();
        this.state={
            name : "benz",
            speed : 250
        }
    }

    changeHandler = () => {
        this.setState({
            name : "bugatti",
            speed : 180
        })
    }

    render() {
        return (
            <div>
                <h1>my car :</h1>
                <p>my first car is {this.state.name} <br></br>
                 and its speed is {this.state.speed}</p>
                <button onClick={this.changeHandler}>change</button>
            </div>
        );
    }
}

export default User;