import React from 'react';
import './ToDoItems.css';

const ToDoItems = (props) => {
    const {Items, deleteItem} = props;
    let length = Items.length
    
    const ListItems = length ? (
     Items.map(Item => {
        return (
            <div key={Item.id}>
                <span>{Item.task}</span>
                <span>{Item.duration}</span>
                <span onClick={() =>deleteItem(Item.id)}>&times;</span>
            </div>
        )
     })
    ): (<p>You have no task today</p>)
    return(
        <div className="listItems">
            <div>
                <span>Task</span>
                <span>Duration</span>
                <span>Action</span>

            </div>
            {ListItems}
        </div>
    )
}

export default ToDoItems;