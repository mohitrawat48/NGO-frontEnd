import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { UsermgmtComponent } from "./user-mgmt/user-mgmt.component";
import { DonationmgmtComponent } from "./donation-mgmt/donation-mgmt.component";
import { CreateComponent } from "./create/create.component";
import { RegisterComponent } from "./register/register.component";
import {UserCartComponent} from "./user-cart/user-cart.component";
import { AdminUserComponent } from "./admin-user/admin-user.component";
import { NonAdminUserComponent } from "./non-admin-user/non-admin-user.component";
const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "user-mgmt", component: UsermgmtComponent },
  { path: "donation-mgmt", component: DonationmgmtComponent },
  { path: 'cart', component: UserCartComponent },
  { path: "create", component: CreateComponent },
  { path: "admin-user", component: AdminUserComponent },
  { path: "non-admin-user", component: NonAdminUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingCompoents = [
  UsermgmtComponent,
  DonationmgmtComponent,
  CreateComponent
];
