import React, { Component } from 'react';
import axios from 'axios';

class Test extends Component {
    
    componentDidMount() {
        this.getUserData();
        this.getArticle();
        this.sendData();
    };

    async getUserData() {
        const response = await axios.get('/api/user-data');

        console.log('User Data Response: ' , response);
    };

    async getArticle() {
        const response = await axios.get('/api/get-article');

        console.log('Article: ',  response);
    };

    async sendData() {
        const dataToSend = {
            text: 'test text',
            type: 'blah',
            hee: 'ha'
        };

        const response = await axios.post('/api/send-data', dataToSend);
        console.log('Send Data Response: ' , response);
    };

    render() {
        return (
            <h1>Test Component</h1>
        )
    }
}

export default Test;