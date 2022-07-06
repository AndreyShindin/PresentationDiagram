import React from "react";
import classes from './Diagram.module.css'



const Coll = (props) => {
    
    return(
        <div className={classes.coloms}>
            <div className={classes.title}>${Math.floor(props.heigth * 100) / 100}</div>
            <div style={{height: props.heigth + 'px',}} 
            className={classes.coll}
            title={props.heigth}></div>
            <span className={classes.day}>{props.day}</span>
        </div>
    )
}

export default Coll