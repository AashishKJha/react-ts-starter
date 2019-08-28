import { Observable, Subject, from } from 'rxjs'

import Environment from '../../Environments/environment.dev';

export default class BaseService {
  public webCall(url, method, body) : Observable<any>{
    return from(fetch(Environment.apiUrl+ url , {
       method : method,
       headers : {
         Accept: 'application/json',
         'Content-Type': 'application/json',
         'Authorization' : "Bearer yy7MRECEM61sOlejFxJF1Ka8O6OdU7rCRtfh"
       }
     })
     .then((res : Response) => res.json()));
  }
}