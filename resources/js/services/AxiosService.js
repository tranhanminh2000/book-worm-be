import axios from 'axios';

const prefixUrl = "/api/v1"

class AxiosService {
  constructor() {
    let service = axios.create();
    this.service = service;
  }

  get(uri){
    return this.service.get(prefixUrl + uri);
  }


}

export default new AxiosService;
