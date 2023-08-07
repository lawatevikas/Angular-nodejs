import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  name:any;
  email:any;
  password:any;
  showloginform:boolean=false
  showsignupform:boolean=true
  logindata:any
  signupdata:any
  constructor(private loginservice:LoginService,
   private router: Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('login')=="Y"){
     this.showloginform=true
     this.showsignupform=false
    }

  }

  OpenSignup(){
    this.showloginform=false
    this.showsignupform=true
    
  }
  OpenLogin(){
    this.showloginform=true
    this.showsignupform=false
  }
  signUp(e:any){
    this.name=e.name;
    this.email=e.email;
    this.password=e.password;
    this.postData()
    this.router.navigateByUrl("Ac-success")
  }
  Login(e:any){
    this.email=e.email;
    this.password=e.password;
    this.getdata()
  }

  postData() {
    const url = 'http://localhost:5000/resister'; // Replace with your API endpoint
    const data ={ "name": this.name,
                  "email":this.email,
                 "password":this.password}
                

    this.loginservice.postData(url, data)
      .subscribe(response => {
        this.signupdata=response
        if(this.logindata.statuscode=="200"){
          this.router.navigate(['Ac-success'])
        }else{
          alert(this.logindata.msg)
        }
      
      });
  }
  getdata(){
    const url = 'http://localhost:5000/login'; // Replace with your API endpoint
    const data ={ 
                  "email":this.email,
                 "password":this.password}
                 this.loginservice.postData(url, data)
      .subscribe(response => {
        // Handle the response here
        this.logindata= response
        if(this.logindata.statuscode=="200"){
          this.router.navigate(['Home'])
        }else{
          alert(this.logindata.msg)
        }
      
      });
                 
  }

}
