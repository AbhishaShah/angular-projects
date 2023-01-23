import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from '../lib/components/product-list';
import { TopBarComponent } from '../lib/components/top-bar';
import { ProductAlertsComponent } from '../lib/components/product-list';
import { ProductDetailsComponent } from '../lib/components/product-details/product-details.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent}
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent
    ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
