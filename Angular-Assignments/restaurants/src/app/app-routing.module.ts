import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { MenuComponent } from './menu/menu.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'restaurant', component: RestaurantComponent},
  {path: 'user', component: UserComponent},
  {path: 'update/:id', component: UpdateRestaurantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AdminComponent, MenuComponent, RestaurantComponent, UserComponent, UpdateRestaurantComponent]