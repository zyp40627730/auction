import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { ProductDtailComponent } from './product-dtail/product-dtail.component';
import { HomeComponent } from './home/home.component';
import { Routes, Router, RouterModule } from '@angular/router';
import { Code404Component } from './code404/code404.component';

const routeConfig: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product/:productTitel', component: ProductDtailComponent},
  {path: '**', component: Code404Component}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    ProductDtailComponent,
    HomeComponent,
    Code404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
