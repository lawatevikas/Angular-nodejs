import { Component, OnInit } from '@angular/core';
import { FetchdataService } from '../services/fetchdata.service';
import { Router } from '@angular/router';
import { DataTransferService } from '../services/data-transfer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
productlist:any
product:any
selectedproduct:any
  constructor(private fetchdataservice:FetchdataService,private Router:Router,private data_transfer:DataTransferService) { }

  ngOnInit(): void {
    this.getproductlist()
  }

getproductlist(){
  const url = 'http://localhost:5000/product-list'; 
this.fetchdataservice.getdata(url).subscribe((data)=>{
this.productlist=data;
this.product=this.productlist.data.products
})
}

buy(e:any){
  for(let i = 0; i < this.product.length; i++){
    if(this.product[i]._id==e){
   this.selectedproduct=this.product[i]
   console.log(this.selectedproduct)
   break
    }
  }
  this.data_transfer.setData(this.selectedproduct)
  this.Router.navigate(['Product-verification'])
}

}
