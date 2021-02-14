import React,{ Component } from "react";
import './AddItem.css'

class AddItem extends Component {
    state = {
        task : '',
        duration : ''
    }
    handleChange = (ev) =>{
        this.setState(
            {[ev.target.id] : ev.target.value}
        )
    }
    handleSubmit = (ev) =>{
        ev.preventDefault();
        this.props.addItem(this.state)
        this.setState({
            task : '',
            duration : ''
        })
    }
    render(){
        return(
            <div>
                Add item
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter task" id="task" onChange={this.handleChange} value={this.state.task} />
                    <input type="number" placeholder="Enter duration" id="duration" onChange={this.handleChange} value={this.state.duration} />
                    <input type="submit" value="Add" />
                </form>
            </div>
        );
    }
}

export default AddItem