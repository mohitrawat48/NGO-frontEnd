import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AuthService } from "./auth.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { AdminUserComponent } from "./admin-user/admin-user.component";
import { NonAdminUserComponent } from "./non-admin-user/non-admin-user.component";
import { RegisterComponent } from "./register/register.component";
import { DonationmgmtComponent } from "./donation-mgmt/donation-mgmt.component";
import { UsermgmtComponent } from "./user-mgmt/user-mgmt.component";
import { UserCartComponent } from "./user-cart/user-cart.component";
import { OrderConfirmComponent } from "./order-confirm/order-confirm.component";
import { DonateService } from "./donateservice";
import { AdminService } from "src/app/adminservice";
import { CreateComponent } from "./create/create.component";
import { DonationComponent } from "./donation/donation.component";

import { DonationService } from "./donation.service";

import { ReactiveFormsModule } from "@angular/forms";
import { DeleteComponent } from './delete/delete.component';

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
    DonationmgmtComponent,
    UsermgmtComponent,
    UserCartComponent,
    OrderConfirmComponent,
    CreateComponent,
    DonationComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AdminService, DonateService, DonationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
