import axios from "axios";

const baseURL = "http://rosa-back-central.westeurope.azurecontainer.io:3060/backend-central"

export async function login(email, password){
    const resp = await axios.post(`${baseURL}/user/login`, {email, password});
    console.log(resp.data)
    const user = resp.data;
    user.picture = user.profile_pic;
    return user;
}
