import React from 'react';
import './App.css';
import Header from './Header';
import Input from './Input';
import ListItem from './ListItem';
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

    console.log(this.state);
  }


  render() {
    return (
      <div className='app'>
        <Header />
        {this.state.allListItems.map(item => <ListItem desc={item} />)}
        <Input handleAddItem={this.addItem} />
      </div>
    )
  }
}


export default App;
