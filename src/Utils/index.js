import axios from "axios";

 const http = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/',
    timeout:100000,
    headers:{
        "Content-Type":"application/json",
        "Authorization": "testingggg"
    },
})

export default http