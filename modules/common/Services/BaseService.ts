import Environment from '../../Environments/environment.dev';
export default class BaseService {
  public webCall(url, method, body){
    return fetch(Environment.apiUrl+ url , {
       method : method,
       headers : {
         Accept: 'application/json',
         'Content-Type': 'application/json',
         'Authorization' : "Bearer d_S_LArLL7xxjqKMjMfxm1w_IxFY32_9Awp2"
       }
     }).then((res) => res.json())
  }
}