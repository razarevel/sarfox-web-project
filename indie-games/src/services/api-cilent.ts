import axios from 'axios';
export interface FetchRespone<T>{
    count:number;
    results:T[];
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '3867e026eecb4af69939533ab3f295d3'
    }
})