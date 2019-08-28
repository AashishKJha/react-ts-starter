import React, {} from 'react';

import Environment from '../../Environments/environment.dev';


import BaseService from './BaseService';

export class RestServices extends BaseService {
  public get(url : string) {
     return fetch(Environment.apiUrl+url , {
       method : "GET",
       headers : {
         Accept: 'application/json',
         'Content-Type': 'application/json',
         'Authorization' : "Bearer d_S_LArLL7xxjqKMjMfxm1w_IxFY32_9Awp2"
       }
     }).then((res) => res.json())
  }
  
  public post(url : string, body : any) {
    return fetch(url , {
       method : "POST",
       headers : {
         Accept: 'application/json',
         'Content-Type': 'application/json',
       },
       body : body
     })
  }

  public delete(url : string, body : any) {
    return fetch(url , {
       method : "DELETE",
       headers : {
         Accept: 'application/json',
         'Content-Type': 'application/json',
       },
       body : body
     })
  }

  public put(url : string, body : any) {
    return fetch(url , {
       method : "PUT",
       headers : {
         Accept: 'application/json',
         'Content-Type': 'application/json',
       },
       body : body
     })
  }
}