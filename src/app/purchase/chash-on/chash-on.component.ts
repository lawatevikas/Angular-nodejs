import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-chash-on',
  templateUrl: './chash-on.component.html',
  styleUrls: ['./chash-on.component.css']
})
export class ChashOnComponent implements OnInit {
vikas:any="vikas";
orderdata:any
  constructor(private Router:Router,private getdata:DataTransferService ) { }

  ngOnInit(): void {
   this.orderdata= this.getdata.getData()
   console.log(this.orderdata)
  }
  save(e:any){
   this.Router.navigate(['order-success'])
  }
}
