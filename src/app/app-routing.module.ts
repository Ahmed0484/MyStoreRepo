import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmComponent } from './confirm/confirm.component';

const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'products/:id',component:ProductDetailsComponent},
  {path:'cart',component:CartComponent},
  {path:'confirm/:name/:total',component:ConfirmComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
