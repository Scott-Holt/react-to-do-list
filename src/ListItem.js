import React from 'react';
import './ListItem.css';
import './index.css';

class List extends React.Component {


    render() {
        return (
            <div>
                <ul className="flex">
                    {this.props.listItems.map((item, index) =>
                        <ListItem
                            desc={item}
                            key={index}
                            id={index}
                            removeItem={this.props.removeItem}
                        />)}
                </ul>
            </div>
        )
    }
}


class ListItem extends React.Component {


    render() {
        return (
            <div className="flex list-content">
                <li className="flex">{this.props.desc}
                    <i
                        id="trash"
                        className="fa fa-trash"
                        onClick={() => { this.props.removeItem(this.props.id) }}
                    ></i>
                </li>

            </div>
        )
    }
}

export default List;