import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from 'src/app/services/data-transfer.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-verification',
  templateUrl: './product-verification.component.html',
  styleUrls: ['./product-verification.component.css']
})
export class ProductVerificationComponent implements OnInit {

  @Input() dataFromParent: any;
  verifyeddata:any;
  orderoption:any;
  constructor( private getdata:DataTransferService,private Rouer:Router,private location:Location) { }

  ngOnInit(): void {
this.verifyeddata=this.getdata.getData()
console.log(this.verifyeddata)
  }

  back(){
this.location.back()
  }
  onCheckboxChange(e:any){
if(e.checked==true){
  this.orderoption=e.value
}else{
  this.orderoption=""
}
  }

  buy(){

    this.verifyeddata={
      "name":this.verifyeddata.name,
      "price":this.verifyeddata.price,
      "company":this.verifyeddata.company,
      "Order-option":this.orderoption
    }
this.getdata.setData(this.verifyeddata)
    this.Rouer.navigate(['cash-on'])
  }

}
