import { config } from '../env.js';

export const dummyJson_ENDPOINT = {
  v1: {
    dummyJson: {
      login: `${config().host.dummyJson}/auth/login`, //POST
      addUser: `${config().host.dummyJson}/users/add`, //POST
    }
  }
}