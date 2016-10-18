import {ApiBaseUrl,GetCounterApiUrl} from './constants'

import * as axios from "axios";

class CounterService{
    getCounter(){
      return axios.get(ApiBaseUrl + GetCounterApiUrl);
    }
}

var counterService  = new CounterService();
export default counterService;