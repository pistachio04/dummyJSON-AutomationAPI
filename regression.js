import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js'
import * as dummyJSON_TEST from './test/index.js'


export default function() {
    dummyJSON_TEST.LoginTest()
    dummyJSON_TEST.addUser()
}

//k6 reporting function
export function handleSummary(data) {
    console.log('Preparing the end-of-test summary...')
    return {
      //rename .html file into appropriate one
      //also change {title} name into appropriate one
      'dummyJSON-report.html': htmlReport(data, { title: 'dummyJSON - Test Report' }),
    }
  }