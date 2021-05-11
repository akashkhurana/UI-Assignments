import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdvertisementFormComponentComponent} from './advertisement-form-component/advertisement-form-component.component'
import {AdvertisementTableComponentComponent} from './advertisement-table-component/advertisement-table-component.component'
import { EditProductComponent } from './edit-product/edit-product.component';
const routes: Routes = [
  {
    component: EditProductComponent,
    path:'update/:id'
  },
  {
    component: AdvertisementFormComponentComponent,
    path:'add'
  },
  {
    component: AdvertisementTableComponentComponent,
    path:'list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
