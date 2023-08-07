import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  private data: any;
  constructor(private http:HttpClientModule) { }

  

  setData(data: any): void {
    this.data = data;
  }

  getData(): any {
    return this.data;
  }
}
