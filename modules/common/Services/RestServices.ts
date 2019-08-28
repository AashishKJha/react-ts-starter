import React, {} from 'react';

import Environment from '../../Environments/environment.dev';


import BaseService from './BaseService';

export class RestServices extends BaseService {
  public get(url : string) {
     return this.webCall(url, "GET", null)
  }
  
  public post(url : string, body : any) {
    return this.webCall(url, "POST", null)
  }

  public delete(url : string, body : any) {
    return this.webCall(url, "DELETE", null)
  }

  public put(url : string, body : any) {
    return this.webCall(url, "PUT", null)
  }
}