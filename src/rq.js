import axios from "axios";

const baseURL = "https://rosa-back-central.azurewebsites.net/backend-central"

export async function login(email, password){
    const resp = await axios.post(`${baseURL}/user/login`, {email, password});
    console.log(resp.data)
    const user = resp.data;
    user.picture = user.profile_pic;
    return user;
}

export async function getSafeZone(userid){
    return (await axios.get(`${baseURL}/szs/${userid}`)).data[0];
}

export async function getMessages(szs){
    return (await axios.get(`${baseURL}/szs/${szs}/messages`)).data;
}

export async function postMessage(szs, uid, content){
    return (await axios.post(`${baseURL}/szs/${szs}/messages/${uid}`, { content })).data;
}
