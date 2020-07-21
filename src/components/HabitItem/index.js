import React from 'react';
import { Collection } from 'mongoose';
import "./style.css";


export default function HabitItem(props) {
const ThisItem = props.ThisItem;
const MarkAsDone = props.MarkAsDone;
const index = props.index;
const score = ThisItem.score

console.log(score, 'score property')


return (
<div className="container">
    <div className="form-control">
        <div className="item">
        {ThisItem.text} 
        
        </div>
        <p>Score: {score} </p>
<div className={ThisItem.done ? 'done' : ''}>
<button
    type="button" 
    onClick={() => MarkAsDone(score, ThisItem._id)} 
    value={index}
    className="btn"
    >Done</button>



</div>
</div>
</div>
)
};