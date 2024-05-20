import { CommonModule } from "@angular/common"; 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from "@angular/material/toolbar"; 
import { HeaderComponent } from "./components/header/header.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { UserListComponent } from "./components/user-list/user-list.component";
import { FormsModule } from '@angular/forms';  
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from "@angular/material/card"; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserDetailComponent } from "./components/user-detail/user-detail.component";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserDetailComponent,
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,   
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,  
    FormsModule, 
    MatProgressSpinnerModule, 
    MatCardModule,
    MatPaginatorModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
