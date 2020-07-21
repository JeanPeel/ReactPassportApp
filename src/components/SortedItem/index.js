import React from 'react';
import { Collection } from 'mongoose';


export default function SortedItem(props) {
const HabitItem = props.HabitItem;
const index = props.index;
const score = HabitItem.score

// console.log('SortedItem: ', SortedItem);
// console.log('HabitItem on Sorted: ', HabitItem);

return (
<div className="container">
    <div className="form-control">
        <div className="item">
        {HabitItem.text} 
        
        </div>
        <p>Score: {score} </p>
<div className={HabitItem.done ? 'done' : ''}>

</div>
</div>
</div>
)
};