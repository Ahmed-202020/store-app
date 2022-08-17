import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { CartComponent } from './Components/cart/cart.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';
import { RegisterComponent } from './Components/register/register.component';
import { AuthGuard } from './Guards/auth.guard';
import { IsLoginGuard } from './Guards/is-login.guard';

const routes: Routes = [
  {path:"" , redirectTo:"home" , pathMatch:"full"} ,
  {path:"login" , canActivate:[IsLoginGuard] , component:LoginComponent} ,
  {path:"register" , canActivate:[IsLoginGuard] , component:RegisterComponent} ,
  {path:"home" , canActivate:[AuthGuard] , component:HomeComponent} ,
  {path:"products" , canActivate:[AuthGuard] , component:ProductsComponent} ,
  {path:"product-details/:id" , canActivate:[AuthGuard] , component:ProductDetailsComponent} ,
  {path:"about" , canActivate:[AuthGuard] , component:AboutComponent} ,
  {path:"contact" , canActivate:[AuthGuard] , component:ContactComponent} ,
  {path:"cart" , canActivate:[AuthGuard] , component:CartComponent} ,
  {path:"**" , component:NotFoundComponent} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
