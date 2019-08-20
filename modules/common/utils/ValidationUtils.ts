export default class ValidationUtils {
  static getError(elementRef: any, controlName: string, value: any) {
    const atr = elementRef.attributes;
  
    let errorresponse: any[] = this.getErrorForTypes([], elementRef, controlName, value);
    Object.keys(atr).forEach(el => {
      switch (atr[el].name) {
        case 'maxlength': {

          if (value && value.toString().length > atr[el].value) {
            errorresponse.push({ 'control': controlName, 'err': `${controlName} max length can be ${atr[el].value}` });
          }
          break;
          // if()
        }
        case 'email': {

          if (value && value.toString().length > atr[el].value) {
            errorresponse.push({ 'control': controlName, 'err': `${controlName} max length can be ${atr[el].value}` });
          }
          break;
          // if()
        }
         case 'minlength': {

          if (value && value.toString().length < atr[el].value) {
            errorresponse.push({ 'control': controlName, 'err': `${controlName} min length can be ${atr[el].value}` });
          }
          break;
          // if()
        }
        case 'required': {

          if (!value) {
            errorresponse.push({ 'control': controlName, 'err': `${controlName} is required` });
          }
          break
          // if()
        }
      }

    }); 
    return errorresponse;
  }

  private static getErrorForTypes (errorresponse : any[], atr : Element, controlName : string, value : any) {
    if(atr.hasAttribute('type')){
      switch (atr.getAttribute('type')){
        case 'email' : {
          if(!String(value).includes('@')){
              errorresponse.push({ 'control': controlName, 'err': `${controlName} should have @` });
          }
        }
      }
    }
    return errorresponse;
  }
}