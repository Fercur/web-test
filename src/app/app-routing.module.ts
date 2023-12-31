import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { AddItemComponentComponent  } from './components/add-item-component/add-item-component.component';

const routes: Routes = [
  {
    path:'',
    component: ItemsComponent
  },
  {
    path:'add',
    component:AddItemComponentComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
