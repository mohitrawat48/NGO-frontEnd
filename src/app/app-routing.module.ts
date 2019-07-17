import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { UserpageComponent } from "./userpage/userpage.component";
import { AdminpageComponent } from "./adminpage/adminpage.component";
import { ApplistComponent } from './applist/applist.component';
import { DonationlistComponent } from './donationlist/donationlist.component';
import { CreateComponent } from './create/create.component';
const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "/user", component: UserpageComponent },
  { path: 'applist', component: ApplistComponent },
  { path: 'donationlist', component: DonationlistComponent },
  { path: 'create', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [ApplistComponent,
  DonationlistComponent,
  CreateComponent];
