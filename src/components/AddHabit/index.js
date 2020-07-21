import React from 'react';
import "./style.css"


export default function AddHabit(props) {
const ThisItem = props.ThisItem;
const updateHabitItem = props.updateHabitItem;
const saveHabitItem = props.saveHabitItem;

return (
<div className="container">
    <form>
        <div className="form-control">
    <div className="form-group">
        <label htmlFor="name"><h2>What Habit are you working on today?</h2></label><br></br>
        <input
        type="text"
        name="ThisItem"
        placeholder="i.e. stop biting nails"
        value={ThisItem}
        onChange={updateHabitItem}
        className="form-control"
        />
    </div>

    <div>
        <button onClick={saveHabitItem} className="btn mt-3 mb-5">Add it!</button>
    </div>
    </div>
    <br className="break"></br>

    </form>
</div>
);
}