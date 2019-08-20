import IFormControl from  './FormControl';
import ValidationErrors from './ValidationErrors';
export default interface IFormFroup {
  /** Feilds */
  controls : Array<IFormControl>;
  isValid() : boolean;
  errors : Array<ValidationErrors>;
  /** Methods */
  setValue(value : any) : void;
  getValue(control : string) : IFormControl;
  patchValue(formValue : any) : void;
}