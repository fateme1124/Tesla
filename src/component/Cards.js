import React, { Component } from 'react';

import Card from './Card';
import style from "./Cards.module.css";
import {v4} from "uuid";

import car1 from "../Pictures/car1.png";
import car2 from "../Pictures/car2.png";
import car4 from "../Pictures/car4.png";
import car5 from "../Pictures/car5.png";

class Cards extends Component {

    constructor(){
        super();
        this.state={
            carData :[
                {image: car1 , name:"carTesla Models S" , cost:"800 $"},
                {image: car5 , name:"carTesla Models S" , cost:"610 $"},
                {image: car2 , name:"carTesla Models S" , cost:"900 $"},
                {image: car4 , name:"carTesla Models S" , cost:"750 $"}
            ]
        }
    }

    render() {
        return (
            <div className={style.container}>
                {this.state.carData.map(car => <Card key={v4()} image={car.image} name={car.name} cost={car.cost} />)}
            </div>
        );
    }
}

export default Cards;