import axios from 'react-native-axios';
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};
const keyGoogle = 'AIzaSyCiw-GHr7tdXw3JA8MCBZZIIkcFlkdDbTo'

async function getLists(data) {
    try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${data}&key=${keyGoogle}`, config)
        return response.data

    }
    catch (error) {
        console.log(error)
    }
}




export const requisitions = {
    getLists,
};