import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { UsermgmtComponent } from "./user-mgmt/user-mgmt.component";
import { DonationmgmtComponent } from "./donation-mgmt/donation-mgmt.component";
import { CreateComponent } from './create/create.component';
const routes: Routes = [{ path: "", component: LoginComponent },
  { path: 'user-mgmt', component: UsermgmtComponent },
  { path: 'donation-mgmt', component: DonationmgmtComponent },
  { path: 'create', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingCompoents = [
                              UsermgmtComponent,
                              DonationmgmtComponent,
                              CreateComponent];
