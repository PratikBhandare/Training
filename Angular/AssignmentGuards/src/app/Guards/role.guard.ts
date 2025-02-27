// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
// import { UserService } from '../user/user.service';

// @Injectable({
//   providedIn:"root"
// })
// export class RoleGuard implements CanActivate{
//   constructor(private UserService:UserService){

//   }
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{

//     if(this.UserService.isAdmin===true){
//       return true;
//     }else{
//       alert("You dont have Admin Acces !!")
//       return false;
//     }
    
//   }

// }



///////////////////////////////////////////////////////////////////////////////
// import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

// @Directive({
//   selector: '[appConditionalDisplay]'
// })
// export class ConditionalDisplayDirective implements OnInit {
//   @Input() appConditionalDisplay: boolean = false;  // Input property

//   constructor(private el: ElementRef, private renderer: Renderer2) {}

//   ngOnInit(): void {
//     // Conditionally set the display style based on input value
//     if (this.appConditionalDisplay) {
//       this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
//     } else {
//       this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
//     }
//   }
// }



// <div [appConditionalDisplay]="isVisible">
//   This content will be conditionally displayed based on the input value.
// </div>


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   isVisible: boolean = true; // You can toggle this value to hide/show the content
// }


// <button (click)="isVisible = !isVisible">
//   Toggle Visibility
// </button>
