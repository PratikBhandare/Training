import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService  {

  person:any;
  

  constructor(private Authservice:AuthService) {
    
   }



  
}
