import React from "react";
import classes from './Diagram.module.css';
import Coll from "./Coll";
import dataJson from '../data/data.json';
import TotalMonth from "./TotalMonth/TotalMonth";


let data = dataJson;
console.log(data)

const Diagram = (props) => {
    let total = 0;
    return(
        <div className={classes.container}>
            <h1 className={classes.head}>Spending - Last 7 days</h1>
            <div className={classes.diagram}>
                <ul className={classes.list}>
                    {data.map((dateF) => {
                        total += dateF.amount
                        return(
                            <li className={classes.item}>
                                <Coll
                                heigth={dateF.amount * 2.5}
                                day={dateF.day}
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
            <TotalMonth total={total} perc='24%'/>
        </div>
    )
}

export default Diagram