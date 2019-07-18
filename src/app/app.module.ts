import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { AdminUserComponent } from "./admin-user/admin-user.component";
import { NonAdminUserComponent } from "./non-admin-user/non-admin-user.component";
import { RegisterComponent } from "./register/register.component";
import { DonationMgmtComponent } from "./donation-mgmt/donation-mgmt.component";
import { UserMgmtComponent } from "./user-mgmt/user-mgmt.component";
import { UserViewComponent } from "./user-view/user-view.component";
import { UserCartComponent } from "./user-cart/user-cart.component";
import { OrderConfirmComponent } from "./order-confirm/order-confirm.component";

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminUserComponent,
    NonAdminUserComponent,
    RegisterComponent,
    DonationMgmtComponent,
    UserMgmtComponent,
    UserViewComponent,
    UserCartComponent,
    OrderConfirmComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
