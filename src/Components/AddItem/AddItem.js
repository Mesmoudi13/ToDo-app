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
                <form onSubmit={this.handleSubmit}>
                    <input className="task" required type="text" placeholder="Enter task" id="task" onChange={this.handleChange} value={this.state.task} />
                    <input className="duration" required type="number" placeholder="Enter duration" id="duration" onChange={this.handleChange} value={this.state.duration} />
                    <input className="action" required type="submit" id="action" value="Add" />
                </form>
            </div>
        );
    }
}

export default AddItem