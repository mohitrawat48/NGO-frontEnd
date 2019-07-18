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
import { DonationmgmtComponent } from "./donation-mgmt/donation-mgmt.component";
import { UsermgmtComponent } from "./user-mgmt/user-mgmt.component";
import { UserViewComponent } from "./user-view/user-view.component";
import { UserCartComponent } from "./user-cart/user-cart.component";
import { OrderConfirmComponent } from "./order-confirm/order-confirm.component";
import { DonateService } from './donateservice';
import { AdminService} from 'src/app/adminservice';
import { CreateComponent } from './create/create.component';

import { ReactiveFormsModule } from '@angular/forms';


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
    UserViewComponent,
    UserCartComponent,
    OrderConfirmComponent,
    CreateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [AuthService, AuthGuard, AdminService, DonateService],
  bootstrap: [AppComponent]
})
export class AppModule {}
