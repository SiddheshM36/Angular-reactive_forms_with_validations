import { AbstractControl } from '@angular/forms';

export function passwordMatch( password : string, confirm_password : string ){
    
    return function(form : AbstractControl){
        const passwordvalue = form.get('password')?.value
        const confirm_passwordvalue = form.get('confirm_password')?.value

        if(passwordvalue === confirm_passwordvalue){
            return null;
        }
           return  { passwordMisMatchError : true }
    
    }
}


// import { AbstractControl } from '@angular/forms'

// export function PasswordMatch(password: string, conpass: string){

//     return function(form: AbstractControl){
//         const pass = form.get('password')?.value
//         const cp = form.get('cp')?.value
//         if (pass === cp){
//             return null
//         }
//         return { passMismatch : true }
//     }
// }