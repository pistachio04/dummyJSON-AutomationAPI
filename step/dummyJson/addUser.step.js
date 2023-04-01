import http from 'k6/http';
import { dummyJson_ENDPOINT } from '../../data/endpoint.js';
import { config } from '../../env.js';

function addUser(firstName, lastName, email, age) {
    const url = dummyJson_ENDPOINT.v1.dummyJson.addUser

    const payload = JSON.stringify(
        {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "age": age
        }
    )

    const params = {
        headers: {
            "Content-Type": "application/json",
        }
    }

    return http.post(url, payload, params)

}

export const dummyJson_addUser_step = {
    addUser
}