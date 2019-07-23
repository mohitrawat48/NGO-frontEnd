import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { UsermgmtComponent } from "./user-mgmt/user-mgmt.component";
import { DonationmgmtComponent } from "./donation-mgmt/donation-mgmt.component";
import { CreateComponent } from "./create/create.component";
import { RegisterComponent } from "./register/register.component";
import { UserCartComponent } from "./user-cart/user-cart.component";
import { AdminUserComponent } from "./admin-user/admin-user.component";
import { NonAdminUserComponent } from "./non-admin-user/non-admin-user.component";
import { DonationComponent } from "./donation/donation.component";
import { OrderConfirmComponent } from "./order-confirm/order-confirm.component";
import { AdminAuthGuard } from "./admin-auth.guard";
import { NonadminAuthGuard } from "./nonadmin-auth.guard";
import { DeleteComponent } from "./delete/delete.component";
import { EditComponent } from "./edit/edit.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "admin-user",
    component: AdminUserComponent,
    canActivate: [AdminAuthGuard],
    children: [
      {
        path: "",
        redirectTo: "user-mgmt",
        pathMatch: "full"
      },
      {
        path: "donation-mgmt",
        component: DonationmgmtComponent
      },
      {
        path: "user-mgmt",
        component: UsermgmtComponent
      },
      { path: "create", component: CreateComponent },
      { path: "edit", component: EditComponent },
      { path: "delete", component: DeleteComponent },
      {
        path: "donations",
        component: DonationComponent
      },
      {
        path: "cart",
        component: UserCartComponent
      },
      {
        path: "order_confirm",
        component: OrderConfirmComponent
      }
    ]
  },
  {
    path: "non-admin-user",
    component: NonAdminUserComponent,
    canActivate: [NonadminAuthGuard],
    children: [
      {
        path: "",
        redirectTo: "donations",
        pathMatch: "full"
      },
      {
        path: "donations",
        component: DonationComponent
      },
      {
        path: "cart",
        component: UserCartComponent
      },
      {
        path: "order_confirm",
        component: OrderConfirmComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingCompoents = [
  UsermgmtComponent,
  DonationmgmtComponent,
  CreateComponent,
  DeleteComponent
];
