const axios  = require('axios');
// import axios, * as others from 'axios';
// const { axios } = require('D:/NAZIK/web_labs/lab6_2/my-app/node_modules/axios/index.d.ts');
// import axios from 'axios';
const getBanks = async () => {
    try {
        const response = await axios.get('http://127.0.0.1:5000/get-banks');
        return response.data
    } catch (error) {
        console.error(error);
    }
}

const getBank = async (id) => {
    try {
        const response = await axios.get(`http://127.0.0.1:5000/get-bank/${id}`);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

const getFilterredBanks = async (filters) => {
    try {
        const response = await axios.get(`http://127.0.0.1:5000/filter/${filters}`);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

module.exports = { getBanks, getBank, getFilterredBanks };