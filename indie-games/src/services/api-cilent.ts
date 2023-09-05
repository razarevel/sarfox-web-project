import axios from 'axios';
export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '3867e026eecb4af69939533ab3f295d3'
    }
})