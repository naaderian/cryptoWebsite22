import React from 'react';
import Item from './Item';
import './Navigation.css';
import Logo from '../../assets/img/logo.svg'

const items = [
    { "name": "Cryptocurrencies", "href": "/" },
    { "name": "Exchanges", "href": "/" },
    { "name": "NFT", "href": "/" },
    { "name": "Portfolio", "href": "/" },
    { "name": "Watchlist", "href": "/" },
    { "name": "Calendars", "href": "/" },
    { "name": "Products", "href": "/" },
    { "name": "Learn", "href": "/" }
]
const Navigation = () => {
    return (
        <nav>
            <ul>
                    <a href="/" className="logo">
                    <img src={Logo}/>
                    </a>
        
                {items.map((name, index) => {
                    return <Item key={index} name={name.name} />
                })}
            </ul>
        </nav>
    );
}

export default Navigation;