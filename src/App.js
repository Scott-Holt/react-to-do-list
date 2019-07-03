import React from 'react';
import './App.css';
import Header from './Header';
import Input from './Input';
import List from './ListItem';
import { directive } from '@babel/types';

class App extends React.Component {

  state = {
    allListItems: ['pizza', 'shoes', 'apples']
  }

  addItem = () => {
    let inputValue = document.getElementById('new-item-field').value;

    this.setState(prevState => {
      return {
        allListItems: prevState.allListItems.push(inputValue)
      }
    })
  }

  // handleAppendItem = () => {

  // }


  render() {
    return (
      <div className='app'>
        <Header />
        <List listItems={this.state.allListItems} />
        <Input handleAddItem={this.addItem} />
      </div>
    )
  }
}


export default App;
