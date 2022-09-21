const BASE_URL = 'http://127.0.0.1:5000';
const RESOURSE_URl = `${BASE_URL}/banks`;

const baseRequest = async ({urlPath = '', method='GET', body = null}) => {
    try {
        const reqParams = {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
        }

        if(body) {
            reqParams.body = JSON.stringify(body);
        }

        return await fetch(RESOURSE_URl, reqParams);
    } catch(error) {
        console.log('ERROR: ' + error);
    }
}

export const getAllBanks = async () => {
    const rawRes = await baseRequest({method: 'GET'});
    console.log(rawRes);
}