import { AbstractControl } from "@angular/forms";
 export function confirmValidator(registerFrom:AbstractControl):  {[key:string]:boolean}|null {
  const pass=registerFrom.get('password')
  const confirmpass=registerFrom.get('confirmpass')
   if (pass?.value !==confirmpass?.value && pass?.dirty && confirmpass?.dirty) {
    confirmpass.setErrors({confirmErr:true})
    return {formErr:true}
   }else{
    return null
   }
 }



/*  */
