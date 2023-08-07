import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ac-success',
  templateUrl: './ac-success.component.html',
  styleUrls: ['./ac-success.component.css']
})
export class AcSuccessComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotologin(){
    sessionStorage.setItem("login","Y")
this.router.navigate([''])
  }

}
