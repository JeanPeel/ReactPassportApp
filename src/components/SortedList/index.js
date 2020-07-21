import React from 'react';
import SortedItem from '../SortedItem';
import { Collection } from 'mongoose';


function SortedList(props) {
const SortedList = props.SortedList;
const HabitItem = SortedItem;
const score = SortedList.score;


console.log('SortedItem on List', SortedItem)
console.log('SCORE', score)
console.log('SortedList: ', SortedList)

return (
<div>
    
    {
        SortedList.map((HabitItem, index) => (
        <SortedItem
            HabitItem={HabitItem}
            index={index}
            key={index}
            score={HabitItem.score}
        />
        ))
    }   
    
</div>
);
}

export default SortedList;