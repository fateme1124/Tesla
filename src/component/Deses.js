import React from 'react';
import img1 from "../Pictures/exterrior.jpg";
import img2 from "../Pictures/interrior.jpg";
import Des from "./Des";
import style from "./Deses.module.css";

const Deses = () => {
    return (
        <>
        <div className={style.container}>
            <div className={style.textDes1}>
            <Des title="Carbon Fibre Spoiler" text="Beinning whit vehicles manufactured in last September
            2014 all new Models Ss come equipped with a camera mounted at the top of the windshield 
            forward looking radar in the lower grill and ulerasonic sonar sensor in the front and 
            rear bumpers that provide a 360-degree buffer zone around the car ." />  
            </div>               
            <img src={img1} alt="img" className={style.img1}/>
        </div>
        <div className={style.container}>
            <img src={img2} alt="img" className={style.img2}/>
            <div className={style.textDes2}>
            <Des title="Premium Interrior" text="The instrument paner
            l is a 12.3 in (31cm) LCD display that indicates speed ,power using, chage level, estimated 
            range and activ grear . The greabox can be set to Drive ,Neutral ,Reverse and Park." />  
            </div>               
        </div>
    </>        
    );
};

export default Deses;