import { Observable, Subject } from 'rxjs'

import Environment from '../../Environments/environment.dev';

export default class BaseService {
  public webCall(url, method, body) : Observable<any>{
    return  Observable.create((observer : Subject<any>) => {
      fetch(Environment.apiUrl+ url , {
       method : method,
       headers : {
         Accept: 'application/json',
         'Content-Type': 'application/json',
         'Authorization' : "Bearer yy7MRECEM61sOlejFxJF1Ka8O6OdU7rCRtfh"
       }
     }).then((res : Response) => res.json())
     .then(data => {
      observer.next(data);
      observer.complete();
     }).catch(err => {
       observer.error(err);
     });
    });
  }
}