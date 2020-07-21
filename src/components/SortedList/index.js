import React from 'react';
import SortedItem from '../SortedItem';
import { Collection } from 'mongoose';


function SortedList(props) {
const SortedList = props.SortedList;
const ThisItem = SortedItem;
const score = SortedList.score;


console.log('SortedItem on List', SortedItem)
console.log('SCORE', score)
console.log('SortedList: ', SortedList)

return (
<div>
    
    {
        SortedList.map((ThisItem, index) => (
        <SortedItem
            ThisItem={ThisItem}
            index={index}
            key={index}
            score={ThisItem.score}
        />
        ))
    }   
    
</div>
);
}

export default SortedList;