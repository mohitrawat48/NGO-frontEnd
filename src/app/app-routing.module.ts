import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { UserpageComponent } from "./userpage/userpage.component";
import { AdminpageComponent } from "./adminpage/adminpage.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "/user", component: UserpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
