import React from 'react'
import Navigation from '../component/Navigation/Navigation'
import Table from '../component/Table/Table'

function Home() {
    return (
       <>
        <Navigation/>
        <br/>
        <h1>Today's Cryptocurrency Prices by Market Cap</h1>
        <p>The global crypto market cap is $1.59T, a 4.20% increase over the last day.</p>
        <a href="/">Read more</a>
        
        <Table/>
       </>
    )
}

export default Home;
