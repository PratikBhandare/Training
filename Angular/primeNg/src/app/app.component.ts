import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primeNg';
  Date!:Date;
  Country!:string;
  form=new FormGroup({
    date:new FormControl(''),
  })

  constructor(private http:HttpClient){
    this.http.get("http://localhost:3000/contact").subscribe(val=>{
      console.log(val);
    })

  }

  hello(){
    console.log("Hello");
    console.log(this.form.value.date);
    console.log(typeof this.Date);
  }

  cHello(s:string){
    console.log("Hello From",s);
    console.log(s);
    
    

  }
}
