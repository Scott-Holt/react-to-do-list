import React from 'react';
import './Input.css';
import './index.css';
import { directive } from '@babel/types';
import { format } from 'url';

class Input extends React.Component {
    render() {
        return (
            <form className="flex">
                New Item: <input></input>

            </form>

        )
    }
}

export default Input; 