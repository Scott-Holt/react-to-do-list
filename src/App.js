import React from 'react';
import './App.css';
import Header from './Header';
import Input from './Input';
import ListItem from './ListItem';
import { directive } from '@babel/types';

let idCounter = 1;

class App extends React.Component {

  state = {
    allListItems: [

    ]
  }



  handleAddItem = (item) => {
    this.setState({
      allListItems: [
        ...this.state.allListItems,
        {
          desc: item,
          id: idCounter
        }
      ]
    })
  }


  //this currently is deleting entire list
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

        {this.state.allListItems.map((item, index) =>
          <ListItem
            removeItem={this.handleRemoveItem}
            itemDesc={item.desc}
            idNum={index}
            key={index}
          />
        )}

        <Input
          addItem={this.handleAddItem}
          id={idCounter}
        />

      </div>
    )
  }
}


export default App;
