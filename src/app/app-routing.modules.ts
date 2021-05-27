import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {ContactsComponent} from './contacts/contacts.component';
import {AboutComponent} from './about/about.component';
import {ExportMaterialsComponent} from './export-materials/export-materials.component';
import {CooperationComponent} from './cooperation/cooperation.component';
import {UserComponent} from './user/user.component';
import {UserOfficeComponent} from './user-office/user-office.component';
import {UserMakeOrderComponent} from './user-make-order/user-make-order.component';
import {UserMyOrdersComponent} from './user-my-orders/user-my-orders.component';
import {AuthGuard} from './shared/service/auth.guard';
import {UserOffersComponent} from './user-offers/user-offers.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegisterComponent},
  {path: 'contact', component: ContactsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'export', component: ExportMaterialsComponent},
  {path: 'cooperation', component: CooperationComponent},
  {path: 'user', component: UserComponent, canActivate: [AuthGuard], children: [
      {path: 'office', component: UserOfficeComponent, canActivate: [AuthGuard]},
      {path: 'make-order', component: UserMakeOrderComponent, canActivate: [AuthGuard]},
      {path: 'my-order', component: UserMyOrdersComponent, canActivate: [AuthGuard]},
      {path: 'offers', component: UserOffersComponent, canActivate: [AuthGuard]},
    ]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

