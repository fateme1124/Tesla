import React, { Component } from 'react';
import style from "./Card.module.css";

import up from "../Pictures/up.png";
import down from "../Pictures/down.png";

class Card extends Component {

    constructor(){
        super();
        this.state = {
            counter : 0,
        }
    }

    downHandler = () => {
        if(this.state.counter >= 1){
           this.setState(prevState => ({
                counter : prevState.counter -1 ,
            })) 
        }    
    }

    upHandeler = () => {
        this.setState(prevState => ({
            counter : prevState.counter +1 ,
        }))
    }

    render() {
        const {image , name , cost} = this.props;
        const {counter} = this.state;
        return (
            <div className={style.container}>
                <img src={image} alt='smart car' />
                <h3>{name}</h3>
                <p>{cost} {counter && ` *${counter} = ${counter * Number(cost.split(" ")[0])} $`}</p>

                <div className={style.counter}>
                    <img className={!this.state.counter && style.deactive} onClick={this.downHandler} src={down} alt='arrow' />
                    <span>{counter}</span>
                    <img src={up} alt='arrow' onClick={this.upHandeler}/>
                </div>
            </div>
        );
    }
}

export default Card;