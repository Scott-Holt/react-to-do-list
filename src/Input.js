import React from 'react';
import './Input.css';
import './index.css';
import { directive } from '@babel/types';
import { format } from 'url';

class Input extends React.Component {


    render() {
        return (
            <form className="flex">
                Create New Item: <input id="new-item-field"></input>
                <div className='button' onClick={() => this.props.handleAddItem()}>Add Item</div>
            </form >

        )
    }
}



export default Input; 