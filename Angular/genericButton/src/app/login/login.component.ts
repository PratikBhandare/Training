import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm=new FormGroup({
    email:new FormControl(""),
    password:new FormControl('',[Validators.minLength(8),Validators.required]),

    
  })

  login(){
    if(!this.loginForm.valid){
      console.log("Not valid form");
      if(this.loginForm.get("password")?.invalid){
        console.log("Password Error !!");
        
      }
      
    }
    console.log(this.loginForm.value);
    
    console.log("Login Works !!");
    
  }
}
