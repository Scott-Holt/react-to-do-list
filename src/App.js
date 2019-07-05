import React from 'react';
import './App.css';
import Header from './Header';
import Input from './Input';
import List from './ListItem';
import { directive } from '@babel/types';

let idCounter = 0;

class App extends React.Component {

  state = {
    allListItems: []
  }



  handleAddItem = (item) => {

    this.setState({
      allListItems: [
        ...this.state.allListItems,

        item

      ]
    })

    idCounter++;
    console.log(idCounter); //this is working
  }



  handleRemoveItem = (id) => {
    console.log(`item with id of ${id} was delted!`);
    this.setState(prevState => ({
      allListItems: prevState.allListItems.filter(listItem => listItem.id !== id)
    }));
  }


  render() {
    return (
      <div className='app'>
        <Header />
        <List listItems={this.state.allListItems} removeItem={this.handleRemoveItem} />
        <Input addItem={this.handleAddItem} id={idCounter} />
      </div>
    )
  }
}


export default App;
