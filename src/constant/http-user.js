import axios from "axios";
const token = localStorage.getItem('token')
export default axios.create({

    baseURL: "https://api-nodejs-todolist.herokuapp.com/user",
    headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json"
    }
});
