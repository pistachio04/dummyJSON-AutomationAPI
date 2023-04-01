import { describe, expect, chai } from 'https://jslib.k6.io/k6chaijs/4.3.4.1/index.js'
import { initContractPlugin } from 'https://jslib.k6.io/k6chaijs-contracts/4.3.4.0/index.js'
import { step_dummyJson } from '../../step/dummyJson.step.js';
import { addUser } from '../../data/dummyJson/addUser.data.js';


initContractPlugin(chai)

let scenario = 'Add with'

export default function() {
    
    describe(`${scenario} valid data`, () => {
        const response = step_dummyJson.dummyJson.addUser(addUser.firstName, addUser.lastName, addUser.email, addUser.age)

        //assertion
        expect(response.status, 'API status code').to.equal(200)
        expect(response.json().firstName, 'first name').to.equal('Marcelinus')
        expect(response.json().lastName, 'last name').to.equal('Sigid')

    })

}