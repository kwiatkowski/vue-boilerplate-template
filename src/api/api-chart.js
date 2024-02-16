import axios from 'axios'

const api = axios.create({
    baseURL: 'https://example.pl',
})

export default {
    getData: ({ payload }) => api.get('/api', {
        params: {
            type: 'xxx',
            limit: 1000
        }
    })
};