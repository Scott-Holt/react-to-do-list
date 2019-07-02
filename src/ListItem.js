import React from 'react';
import './ListItem.css';
import './index.css';

class List extends React.Component {


    render() {
        return (
            <ul className="flex">
                {this.props.listItems.map(item => <ListItem desc={item} />)}
            </ul>
        )
    }
}


class ListItem extends React.Component {

    render() {
        return (
            <li>{this.props.desc}</li>
        )
    }
}

export default List;