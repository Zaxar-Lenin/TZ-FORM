import axios from "axios";

const API_KEY = "074642fc934950f321fab650c6e2fd4f6ad9b036"
const SECRET = "c42cd21b43e14c21bbd86f4d4039ab158404aa7d"

const instance = axios.create({
    baseURL: "https://cleaner.dadata.ru/api/v1/clean/address",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Token ${API_KEY}`,

    }
})

export const objApi = {
    requestPlace(place: string){
        let a = ["Москва"]
        return instance.post("",a)
    }
}

//
// let  url = "https://cleaner.dadata.ru/api/v1/clean/address";
// let  token = "61d37c7af70d92e385e9ba9fbca44834fc96e11d";
// let  secret = "4cee967c28da3ed59bc22548993b5888a12e5594";
// let  query = "москва сухонская 11";
//
// let options = {
//     method: "POST",
//     mode: "cors",
//     headers: {
//         "Content-Type": "application/json",
//         "Authorization": "Token " + token,
//         "X-Secret": secret
//     },
//     body: JSON.stringify([query])
// }
//
// // @ts-ignore
// fetch(url, options)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log("error", error));