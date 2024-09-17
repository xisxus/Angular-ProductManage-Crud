import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, FormsModule , JsonPipe],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {
 
  
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
    this.http.put('https://localhost:7115/ProductCategories/'+ this.id, this.pro).subscribe((res:any)=>{
      alert('success')
      this.rou.navigateByUrl('')
    })
  }



  // =============================================

route = inject(ActivatedRoute)
id : any

  ngOnInit(): void {
   this.id = this.route.snapshot.paramMap.get('id')
   this.getAll()
 
   
   
  }




  getAll(){
    this.http.get('https://localhost:7115/ProductCategories/'+this.id).subscribe((res:any)=>{
      this.pro = res
      
      
      this.pro.products.forEach(p=>p.productID=0)
      console.log(this.pro)
      
    })
  }

}
