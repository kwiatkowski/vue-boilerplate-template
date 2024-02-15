import axios from 'axios'

const api = axios.create({
    baseURL: 'https://example.pl/api',
})

export default {
    getData: ({ payload }) => api.get('', {
        params: {
            type: 'xxx',
            limit: 1000
        }
    })
};