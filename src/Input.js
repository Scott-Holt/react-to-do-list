import React from 'react';
import './index.css';
import './Input.css';
import { directive } from '@babel/types';
import { format } from 'url';

class Input extends React.Component {


    render() {
        return (
            <form className="flex">
                <div className="text-field flex">
                    <span>Create New Item:</span>
                    <input id="new-item-field"></input>
                </div>
                <div className='button flex' onClick={() => this.props.handleAddItem()}>Add Item</div>
            </form >

        )
    }
}



export default Input; 