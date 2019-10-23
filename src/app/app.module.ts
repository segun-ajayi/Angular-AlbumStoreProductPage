import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import { ProductDescriptionComponent } from './product-description/product-description.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductDescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
