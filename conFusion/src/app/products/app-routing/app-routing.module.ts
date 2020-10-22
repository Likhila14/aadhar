import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

import { AddcartComponent } from 'src/app/addcart/addcart.component';
import { DescriptComponent } from 'src/app/descript/descript.component';



const routes: Routes = [
  { path: 'cart', component: AddcartComponent } ,
   { path: 'detail', component : DescriptComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ AddcartComponent , DescriptComponent ];
