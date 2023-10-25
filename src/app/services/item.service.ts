import { Injectable } from '@angular/core';
import {Item} from '../models/iem';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
private url:string='http://localhost:3001/items';
private httpOptions={
  headers:{
    'Content-Type':'application/json'
  }
};
  items:Item[]=[
    {
      id:0,
      tittle:"manzana",
      price: 10.5,
      quantity:4,
      completed:false
    },
    {
      id:1,
      tittle:"pan",
      price: 3.5,
      quantity:8,
      completed:true
    },
    {
      id:2,
      tittle:"chamarra",
      price: 300,
      quantity:1,
      completed:false
    }
  ];
  
  constructor(private http:HttpClient) { }
  getItems():Observable<Item[]>{
    //return this.items;
    //manejo de flujo de eventos
    return this.http.get<Item[]>(this.url)
  }
  addItem(item:Item):Observable<Item>{
    //this.items.unshift(item);
    return this.http.post<Item>(this.url, item,this.httpOptions);
  }
  toggleItem(item:Item):Observable<Item>{
    return this.http.put<Item>(this.url + item.id,item,this.httpOptions);
  }
  deteleItem(item:Item):Observable<Item>{
    return this.http.delete<Item>(this.url + item.id);
  }
}
