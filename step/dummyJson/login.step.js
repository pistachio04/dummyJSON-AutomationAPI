import http from 'k6/http';
import { dummyJson_ENDPOINT } from '../../data/endpoint.js';
import { config } from '../../env.js';

function login(username, password) {
    const url = dummyJson_ENDPOINT.v1.dummyJson.login

    const payload = JSON.stringify(
        {
            "username": username,
            "password": password
        }
    )

    const params = {
        headers: {
            "Content-Type": "application/json",
        }
    }

    return http.post(url, payload, params)

}

export const dummyJson_login_step = {
    login
}