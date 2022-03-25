import axios from "axios";

const baseURL = "https://rosa-back-central.azurewebsites.net/backend-central"

export async function login(email, password){
    const resp = await axios.post(`${baseURL}/user/login`, {email, password});
    console.log(resp.data)
    const user = resp.data;
    user.picture = user.profile_pic;
    return user;
}
