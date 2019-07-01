import React from 'react';
import './App.css';
import Header from './Header';
import Input from './Input';
import { directive } from '@babel/types';

class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Input />
      </div>
    )
  }
}

export default App;
