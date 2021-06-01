import React from 'react';

const Item = (props) => {
    return(
        <li>
            <a href="/">{props.name}</a>
        </li>
    );
}

export default Item;