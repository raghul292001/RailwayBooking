import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from"@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { AdminComponent } from './pages/admin/admin.component';
import { HeaderComponent } from './shared/header/header.component';
import { RegisterComponent } from './shared/register/register.component';
import { LoginComponent } from './shared/login/login.component';
import { HttpClientModule} from'@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    BookingsComponent,
    AdminComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
  providers: [MessageService]
})
export class AppModule { }
