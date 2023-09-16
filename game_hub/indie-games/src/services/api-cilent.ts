import axios, { AxiosRequestConfig } from "axios";
export interface FetchRespone<T> {
  count: number;
  next: string | null;
  results: T[];
}

export const APIinstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3867e026eecb4af69939533ab3f295d3",
  },
});
class ApiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config?: AxiosRequestConfig) =>
    APIinstance.get<FetchRespone<T>>(this.endpoint, config).then(
      (res) => res.data
    );
  getSingle = (id: number | string) =>
    {
      return APIinstance.get<T>(this.endpoint + "/" + id).then((res) => res.data);
    }
    }
export default ApiClient;
