import axios from "axios";

export const fetchUsersApi = () => {
    return axios.get("https://jsonplaceholder.typicode.com/users");
};