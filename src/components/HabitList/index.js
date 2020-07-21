import React from 'react';
import HabitItem from '../HabitItem';
import { Collection } from 'mongoose';


function HabitList(props) {
const HabitList = props.HabitList;
const MarkAsDone = props.MarkAsDone;
const HabitItem = HabitItem;
const score = HabitList.score


console.log('To Do Item', HabitItem)
console.log('SCORE', score)
console.log('HabitList: ', HabitList)

return (
<div>
    
    {
        HabitList.map((HabitItem, index) => (
        <HabitItem
            HabitItem={HabitItem}
            MarkAsDone={MarkAsDone}
            index={index}
            key={index}
            score={HabitItem.score}
        />
        ))
    }   
    
</div>
);
}

export default HabitList;