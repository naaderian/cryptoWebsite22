import React, { useEffect, useState } from 'react'
import './Table.css'
import ReactTable from 'react-table-6'

function Table() {
    const [api, setapi] = React.useState([])
    useEffect(() => {
        fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=90789597-4ddb-4e4f-8cad-1ef5d90aee81&start=1&limit=5000&convert=USD')
            .then(res => res.json())
            .then(response => {
                setapi(response.data)
                console.log(response.data);
            })
    }, [])

    const data = api.map(data => {
        return ({
            num: data.cmc_rank,
            name: data.name,
            price: data.quote.USD.price,
            Volume24h: data.quote.USD.percent_change_24h,
            h: data.quote.USD.percent_change_24h,
            7: data.quote.USD.percent_change_7d,
            MarketCap: data.quote.USD.market_cap,
            CirculatingSupply: data.total_supply,
        })
    })
    
    const columns = [{
        Header: '#',
        accessor: 'num' // String-based value accessors!
    }, {
        Header: 'Name',
        accessor: 'name',
    }, {
        Header: 'Price',
        accessor: 'price',
    }, {
        Header: '24h %',
        accessor: 'h',
    },
    {
        Header: '7d %',
        accessor: '7',
    },
    {
        Header: 'Market Cap',
        accessor: 'MarketCap',
    },
    {
        Header: 'Volume(24h)',
        accessor: 'Volume24h',
    },
    {
        Header: 'Circulating Supply',
        accessor: 'CirculatingSupply',
    },
    {
        Header: 'Last 7 Days',
        accessor: 'Last 7 Days',
    }]
    return (
        <>
            <ReactTable
                data={data}
                columns={columns}
            />
        </>

    )
}

export default Table
