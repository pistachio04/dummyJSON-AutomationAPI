import { describe, expect, chai } from 'https://jslib.k6.io/k6chaijs/4.3.4.1/index.js'
import { initContractPlugin } from 'https://jslib.k6.io/k6chaijs-contracts/4.3.4.0/index.js'
import { step_dummyJson } from '../../step/dummyJson.step.js';
import { LOGIN_DATA } from '../../data/dummyJson/login.data.js';


initContractPlugin(chai)

let scenario = 'Login with'

export default function() {
    
    describe(`${scenario} valid credential`, () => {
        const response = step_dummyJson.dummyJson.login(LOGIN_DATA.username, LOGIN_DATA.password)

        //assertion
        console.log(response.body)
        expect(response.status, 'API status code').to.equal(200)
        expect(response.json().username, 'username').to.equal('kminchelle')
        expect(response.json().token, 'token').to.not.be.empty

    })

    describe(`${scenario} invalid credential`, () => {
        const password = 'worngpassword'
        const response = step_dummyJson.dummyJson.login(LOGIN_DATA.username, password)

        //assertion
        console.log(response.body)
        expect(response.status, 'API status code').to.equal(400)
        expect(response.json().message, 'username').to.equal('Invalid credentials')

    })

}