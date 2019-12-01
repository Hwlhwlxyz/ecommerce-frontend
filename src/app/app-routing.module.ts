import { SalespersonUserinfoComponent } from './component/salesperson-userinfo/salesperson-userinfo.component';
import { RegionComponent } from './component/region/region.component';
import { StoreComponent } from './component/store/store.component';
import { TransactionComponent } from './component/transaction/transaction.component';
import { SalespersonProductComponent } from './component/salesperson-product/salesperson-product.component';
import { CartComponent } from './component/cart/cart.component';
import { UserinfoComponent } from './component/userinfo/userinfo.component';
import { ProductComponent } from './component/product/product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent}, 
  { path: 'login', component: LoginComponent},
  { path: 'product', component: ProductComponent},
  { path:'userinfo', component: UserinfoComponent},
  {  path:'cart', component: CartComponent},
  { path:'salesperson/product', component: SalespersonProductComponent},
  { path:'salesperson/transaction', component: TransactionComponent},
  { path:'salesperson/store', component: StoreComponent},
  { path:'salesperson/region', component: RegionComponent},
  { path:'salesperson/userinfo', component: SalespersonUserinfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
