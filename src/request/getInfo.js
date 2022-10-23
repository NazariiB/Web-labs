const axios  = require('axios');

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