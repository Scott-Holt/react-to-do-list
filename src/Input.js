import React from 'react';
import './index.css';
import './Input.css';
import { directive } from '@babel/types';
import { format } from 'url';



class Input extends React.Component {

    state = {
        value: ''
    }




    handleValueChange = (e) => {
        this.setState({
            value: e.target.value
        })
        console.log(this.state.value)
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.value);
    }

    render() {
        return (
            <form className="flex" onSubmit={this.handleSubmit}>
                <input
                    id="new-item-field"
                    type="text"
                    placeholder="enter new item here"
                    onChange={this.handleValueChange}
                    value={this.state.value}
                />
                <input
                    type="submit"
                    value="Add Item"
                    className='button flex'
                />
            </form >

        )
    }
}



export default Input; 