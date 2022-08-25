import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZGFjZjFiMWU1Zjg3ZDk5OTllZDMxNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1ODc4OTYwOSwiZXhwIjoxNjU5MDQ4ODA5fQ.ZnAEl5UJ9Ay_wrqMP5bESvB7_TRxINGyP1soESIsMcM";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers:{token: `Bearer ${TOKEN}`}
});