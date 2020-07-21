import React from 'react';
import HabitItem from '../HabitItem';
import { Collection } from 'mongoose';


function HabitList(props) {
const HabitList = props.HabitList;
const MarkAsDone = props.MarkAsDone;
const ThisItem = props.ThisItem;
const score = HabitList.score


console.log('HabitItem Item', HabitItem)
console.log('ThisItem Item', ThisItem)
console.log('SCORE', score)
console.log('HabitList: ', HabitList)

return (
<div>
    
    {
        HabitList.map((HabitItem, index) => (
        <HabitItem
            ThisItem={ThisItem}
            MarkAsDone={MarkAsDone}
            index={index}
            key={index}
            score={ThisItem.score}
        />
        ))
    }   
    
</div>
);
}

export default HabitList;