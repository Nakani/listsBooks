import axios from 'react-native-axios';
import { apibook } from './apiBook'

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};
const keyGoogle = 'AIzaSyCiw-GHr7tdXw3JA8MCBZZIIkcFlkdDbTo'

async function getLists() {
    try {
        //const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=harry+potter&key=${keyGoogle}`, config)
        //return response.data
        return apibook

    }
    catch (error) {
        console.log(error)
    }
}


async function getDetailList(id) {
    try {
        const response = await axios.get(`http://dev.4all.com:3003/tarefa/${id}`, config);
        return response.data
    } catch (error) {
        console.log('ops deu erro', error)
        console.error(error);
    }
}

export const requisitions = {
    getLists,
    getDetailList
};