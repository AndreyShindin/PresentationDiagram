import React from "react";
import classes from './Score.module.css';

const Score = (props) => {
    return(
        <div className={classes.container}>
            <div className={classes.total}>
                <h2 className={classes.head}>My balance</h2>
                <span className={classes.score}>{props.totalscore}</span>
            </div>
            <div className={classes.theme}></div>
        </div>
    )
}

export default Score