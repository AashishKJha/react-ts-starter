export default interface ValidationErrors {
  message : string;
  expextedValue : any;
  currentValue : any;
  controlName  : string;
  formGroupName : string;
}