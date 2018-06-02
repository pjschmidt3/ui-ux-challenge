import axios from 'axios'
export default class ZipCodeService {
  constructor () {
    this.http = axios.create({
      baseURL: 'https://shipt-zip-code-test-api.herokuapp.com/api/zip_codes'
    })
  }

  async fetchZipCodeData ( zipCode ) {
    return this.http.get(`/${ zipCode }`)
      .then(response => {
        return response.data.stores
      })
  }
}
