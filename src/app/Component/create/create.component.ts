import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, FormsModule , JsonPipe],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  http = inject(HttpClient)
  rou = inject(Router)
  pro = {
    productCategoryID: 0,
    name: "",
    products: [
      {
        productID : 0,
        name : "",
        productNumber: "",
        color: "",
        standardCost: 0,
        listPrice: 0,
        size: 0,
        weight: 0,
        productCategoryID: 0,
        productCategory : { 
          productCategoryID: 0,
          name: "demo"}
      }
    ]
  }

  tempPro ={
    productID : 0,
    name : "",
    productNumber: "",
    color: "",
    standardCost: 0,
    listPrice: 0,
    size: 0,
    weight: 0,
    productCategoryID: 0,
    productCategory : { 
      productCategoryID: 0,
      name: "demo"}
  }

  edi(p: any){
    this.tempPro = p
    this.dele(p)
  }

  dele(q: any){
    this.pro.products =this.pro.products.filter((p)=> p !==q)
  }

  addProd(){
     this.pro.products =this.pro.products.filter((p)=> p.standardCost !==0)
    

    this.pro.products.push(this.tempPro)

    this.tempPro ={
      productID : 0,
      name : "",
      productNumber: "",
      color: "",
      standardCost: 0,
      listPrice: 0,
      size: 0,
      weight: 0,
      productCategoryID: 0,
      productCategory : { 
        productCategoryID: 0,
        name: "demo"}
    }
  }


  addpc(){
    this.http.post('https://localhost:7115/ProductCategories', this.pro).subscribe((res:any)=>{
      alert('success')
      this.rou.navigateByUrl('')
    })
  }


}
