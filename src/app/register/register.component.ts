import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { passwordMatch } from '../validation/password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // registerForm: FormGroup;
  // submitted = false

  // constructor(){
  registerForm = new FormGroup({
    username : new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)]),
    confirm_password:  new FormControl('', [Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/)])
  }, [passwordMatch("password", "confirm_password")] )
// }

  onRegisterSubmit(){
    // this.submitted = true

    if (this.registerForm.invalid){
        return
    }
    else{
      // const email1 = this.registerForm.controls.email.value
      const email1 = this.registerForm.get('email')?.value
      console.log(this.registerForm.value)
      console.log(email1)
    }
    
  }

}
