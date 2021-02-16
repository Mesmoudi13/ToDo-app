import './App.css';
import React,{ Component } from 'react';
import  ToDoItems  from "./Components/ToDoItems/ToDoItems";
import AddItem from "./Components/AddItem/AddItem";

class App extends Component{
  state = {
    Items : [
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
      <div className="App container">
        <h1 className="text-center">To Do List</h1>
        <div className="table">
            <ToDoItems Items={this.state.Items} deleteItem={this.deleteItem}/>
            <AddItem addItem={this.addItem} />
        </div>
      </div>

    );
  }
    
}

export default App;
