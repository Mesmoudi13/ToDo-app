import React from 'react';
import './ToDoItems.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ToDoItems = (props) => {
    const {Items, deleteItem} = props;
    let length = Items.length
    
    const ListItems = length ? (
     Items.map(Item => {
        return (
            <div className="tasks" key={Item.id}>
                <h3 className="task item">{Item.task}</h3>
                <h3 className="duration item">{Item.duration} h</h3>
                <h3 className="action item"><FontAwesomeIcon className="icon" onClick={() =>deleteItem(Item.id)} icon={faTimes} /></h3>
            </div>
        )
     })
    ): (<p className="noTask">You have no task to do</p>)
    return(
        <div className="listItems">
            <div className="titles">
                <h2 className="task title">Task</h2>
                <h2 className="duration title">Duration</h2>
                <h2 className="action title">Action</h2>

            </div>
            {ListItems}
        </div>
    )
}

export default ToDoItems;