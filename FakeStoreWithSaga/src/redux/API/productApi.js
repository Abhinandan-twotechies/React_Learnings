import axios from "axios";

export const fetchProductApi = () => {
    return axios.get("https://fakestoreapi.com/products");
}