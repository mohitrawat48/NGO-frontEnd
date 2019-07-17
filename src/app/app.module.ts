import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { JwtModule } from "@auth0/angular-jwt";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserpageComponent } from "./userpage/userpage.component";
import { AdminpageComponent } from "./adminpage/adminpage.component";
import { LoginComponent } from "./login/login.component";

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    UserpageComponent,
    AdminpageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ["localhost:4000"]
        //mgblacklistedRoutes: ["localhost:4000/api/auth"]
      }
    })
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
