import React from 'react';
import './ListItem.css';

class ListItem extends React.Component {

    render() {
        return (
            <ul id="ul" className="list-item">
                <li>{this.props.desc}</li>
            </ul>
        )
    }
}
export default ListItem;