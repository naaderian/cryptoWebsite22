import React from 'react';

class Apis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          posts: []
        }
    }

    componentDidMount() {
      var xhttp = new XMLHttpRequest();
      var self = this;
      
      xhttp.onreadystatechange = function(e){
        console.log("this:", this);
        if (xhttp.readyState === 4 && xhttp.status === 200){
          console.log("ok, response :", this.response);
          self.setState({
            posts: JSON.parse(this.response)
          });
        }
      }
      xhttp.open('GET', 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=90789597-4ddb-4e4f-8cad-1ef5d90aee81&start=1&limit=5000&convert=USD');
      xhttp.send();
    }

    render() {
      return(
       <h1>hi</h1>
      );
    }
}

export default Apis;