import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CsrListComponent } from './viewcsrdata/csr-list/csr-list.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { CsrformComponent } from './addcunsumer/csrform/csrform.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './usermodule/login/login.component';
import { RegisterformComponent } from './usermodule/registerform/registerform.component';
import { BillGenerateComponent } from './bill-generate/bill-generate.component';
import { LocationComponent } from './location/location.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserloginviewComponent } from './userloginview/userloginview.component';

@NgModule({
  declarations: [
    AppComponent,
    CsrListComponent,
    WelcomeComponent,
    CsrformComponent,
    RegisterformComponent,
    LoginComponent,
    BillGenerateComponent,
    LocationComponent,
    UserloginComponent,
    UserloginviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
