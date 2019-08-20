export default interface IFormControl {
  isValid() : boolean;
  name : string;
  value : any;
  errors : any;
  setValue(value) : void;
}