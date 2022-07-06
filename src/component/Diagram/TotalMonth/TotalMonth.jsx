import React from "react";
import classes from './TotalMonth.module.css';


const TotalMonth = (props) => {
    return(
        <div className={classes.container}>
            <div className={classes.total}>
                <h3 className={classes['total-name']}>Total this month</h3>
                <span className={classes['total-all']}>${props.total}</span>
            </div>
            <div className={classes.perc}>
                <span className={classes['total-perc']}>{props.perc}</span>
                <span className={classes['last-head']}>from last month</span>
            </div>
        </div>
       
    )
}

export default TotalMonth