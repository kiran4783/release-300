import React, { Component } from 'react';
import Axios from 'axios';

class Getdata extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
        }
    }
    
    componentDidMount () {
        const url3 = 'https://cors-anywhere.herokuapp.com/http://10.36.23.3/restconf/data/mimosa:mimosa-json/ManagementIP';
        const url2 = 'https://cors-anywhere.herokuapp.com/';
        
        const url = 'https://jsonplaceholder.typicode.com/users';
        Axios.get(url3)
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        });
    }
    
    render() {
        return (
            <div>
                Lists of Posts
            </div>
        )
    }
}

export default Getdata
