import React from 'react';
import './ToDoItems.css';

const ToDoItems = (props) => {
    const {Items} = props;
    const ListItems = Items.map(Item => {
        return (
            <div key={Item.id}>
                <span>{Item.task}</span>
                <span>{Item.duration}</span>
                <span>&times;</span>
            </div>
        )
    })
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