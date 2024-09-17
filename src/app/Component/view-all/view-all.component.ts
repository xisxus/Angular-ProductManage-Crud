import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-all',
  standalone: true,
  imports: [JsonPipe, CommonModule, RouterLink],
  templateUrl: './view-all.component.html',
  styleUrl: './view-all.component.css'
})
export class ViewAllComponent implements OnInit {
  ngOnInit(): void {
   this.getAll()
  }

  all : any[] = []
  http = inject(HttpClient)


  getAll(){
    this.http.get('https://localhost:7115/ProductCategories').subscribe((res:any)=>{
      this.all = res
      console.log(this.all)
    })
  }

  dele(id:any){
    this.http.delete('https://localhost:7115/ProductCategories/'+ id).subscribe((res:any)=>{
      this.getAll()
      alert('deleted')
    })
  }

}
