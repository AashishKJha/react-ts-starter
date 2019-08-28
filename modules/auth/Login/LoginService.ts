
import { RestServices } from '../../common/Services/RestServices';
export class LoginService {
  private service : RestServices = new RestServices();

  public login(){
     return this.service.get('users')
  }
}