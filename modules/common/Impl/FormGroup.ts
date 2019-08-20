import IFormGroup from '../interfaces/FormGroup';
import IFormControl from '../interfaces/FormControl';

export class FormGroup implements IFormGroup {
  private controls : Array<IFormControl>;

  constructor(formFroup : any) {
    console.log(formFroup)
  }

  isValid() {
    return false
  }


  setValue(value: any): void {

  }
  getValue(control: string) {

  }
  patchValue(formValue: any) {

  }

}


export default class LoginForm {
  loginFormGroup : FormGroup;
  constructor() {
    this.createLoginForm()
  }

  createLoginForm(){
    this.loginFormGroup = new FormGroup({
      name : null,
      age : null
    })
  }
}