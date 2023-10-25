import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/iem';
import { ItemService } from 'src/app/services/item.service';
@Component({
  selector: 'app-add-item-component',
  templateUrl: './add-item-component.component.html',
  styleUrls: ['./add-item-component.component.css']
})
export class AddItemComponentComponent implements OnInit {
 id:number=0;
tittle:string='';
 price:number=0;
 quantity:number=0;
 constructor(private itemServie:ItemService,private router:Router){}
 ngOnInit(): void {
     
 }
 onSubmit(){
  const item=new Item();
  item.id=this.id;
  item.tittle=this.tittle;
  item.price=this.price;
  item.quantity=this.quantity;
  item.completed= false;

  //this.itemServie.addItem(item);
  this.itemServie.addItem(item).subscribe(i=>{
    this.router.navigate(['/']);
  });
  
 }
}
