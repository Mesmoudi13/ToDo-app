import './App.css';
import React,{ Component } from 'react';
import  ToDoItems  from "./Components/ToDoItems/ToDoItems";
import AddItem from "./Components/AddItem/AddItem";

class App extends Component{
  state = {
    Items : [
      {id:1, task: 'Homework', duration: 3},
      {id:2, task: 'Reading', duration: 1},
      {id:3, task: 'Workout', duration: 2}
    ]
  }

  deleteItem = (id) =>{
    let Items = this.state.Items.filter(Item =>{
      return Item.id !== id
    })
    this.setState({Items})
  }
  addItem = (Item) =>{
    let Items = this.state.Items;
    Item.id = Math.random()
    Items.push(Item)
    this.setState(Items)
    
  }
  render(){
    return(
      <div className="App">
        To do list app
        <ToDoItems Items={this.state.Items} deleteItem={this.deleteItem}/>
        <AddItem addItem={this.addItem} />
      </div>

    );
  }
    
}

export default App;
