import React from 'react';
import { Collection } from 'mongoose';


export default function SortedItem(props) {
const ThisItem = props.ThisItem;
const index = props.index;
// const score = ThisItem.score

// console.log('SortedItem: ', SortedItem);
// console.log('ThisItem on Sorted: ', ThisItem);

return (
<div className="container">
    <div className="form-control">
        <div className="item">
        {ThisItem.text} 
        
        </div>
        {/* <p>Score: {score} </p> */}
<div className={ThisItem.done ? 'done' : ''}>

</div>
</div>
</div>
)
};