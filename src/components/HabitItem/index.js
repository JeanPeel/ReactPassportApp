import React from 'react';
import { Collection } from 'mongoose';
import "./style.css";


export default function HabitItem(props) {
const HabitItem = props.HabitItem;
const MarkAsDone = props.MarkAsDone;
const index = props.index;
const score = HabitItem.score

console.log(score, 'score property')


return (
<div className="container">
    <div className="form-control">
        <div className="item">
        {HabitItem.text} 
        
        </div>
        <p>Score: {score} </p>
<div className={HabitItem.done ? 'done' : ''}>
<button
    type="button" 
    onClick={() => MarkAsDone(score, HabitItem._id)} 
    value={index}
    className="btn"
    >Done</button>



</div>
</div>
</div>
)
};