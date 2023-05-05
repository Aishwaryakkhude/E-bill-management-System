import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { CsrListComponent } from './viewcsrdata/csr-list/csr-list.component';
import { CsrformComponent } from './addcunsumer/csrform/csrform.component';
import { LoginComponent } from './usermodule/login/login.component';
import { WelcomeUserComponent } from './usermodule/welcomeuser/welcomeuser.component';
import { RegisterformComponent } from './usermodule/registerform/registerform.component';
import { BillGenerateComponent } from './bill-generate/bill-generate.component';
import { LocationComponent } from './location/location.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserloginviewComponent } from './userloginview/userloginview.component';


const routes: Routes = [{path:'',component:WelcomeComponent},
{path:'csrlist',component:CsrListComponent},
{path:'csrform',component:CsrformComponent},
{path:'updateCsr/:id',component:CsrformComponent},
{path:'register',component:RegisterformComponent},
{path:'login',component:LoginComponent},
{path:'welcome',component:WelcomeUserComponent},
{path:'bill',component:BillGenerateComponent},
{path:'location',component:LocationComponent},
{path:'logout',component:LoginComponent},
{path:'ulogin',component:UserloginComponent},
{path:'uloginview',component:UserloginviewComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
