import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdvertisementFormComponentComponent } from './advertisement-form-component/advertisement-form-component.component';
import { AdvertisementTableComponentComponent } from './advertisement-table-component/advertisement-table-component.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FilterPipe } from './filter.pipe'
@NgModule({
  declarations: [
    AppComponent,
    AdvertisementFormComponentComponent,
    AdvertisementTableComponentComponent,
    EditProductComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
