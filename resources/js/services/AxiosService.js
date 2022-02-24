import axios from 'axios';

class AxiosService {
  constructor() {
    let service = axios.create();
    this.service = service;
  }
  
  get(url){
    return this.service.get(url);
  }


}

export default new AxiosService;