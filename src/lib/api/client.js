import axios from "axios";

const client = axios.create();

client.defaults.baseURL = "http://3.36.21.222/";

client.defaults.headers.common["x-access-token"] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJFbWFpbCI6InNvcHRAc29wdC5jb20iLCJpYXQiOjE2MDU5ODEwNDR9.LW1-GOjfnj2o8r9Vg979CllgIGoVqzqUBSpOYz8AhEk";

export default client;
