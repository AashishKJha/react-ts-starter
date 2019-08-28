
import { RestServices } from '../../common/Services/RestServices';
export class LoginService {
  private service : RestServices = new RestServices();

  public async login(){
    return await this.service.get('')
  }
}