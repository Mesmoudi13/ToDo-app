import './App.css';
import React,{ Component } from 'react';
import  ToDoItems  from "./Components/ToDoItems/ToDoItems";
import AddItem from "./Components/AddItem/AddItem";

class App extends Component{
  state = {
    Items : [
      {id:1, task: 'Homework', duration: '2h'},
      {id:2, task: 'Reading', duration: '1h'},
      {id:3, task: 'Workout', duration: '30min'}
    ]
  }
  render(){
    return(
      <div className="App">
        To do list app
        <ToDoItems Items={this.state.Items}/>
        <AddItem />
      </div>

    );
  }
    
}

export default App;
