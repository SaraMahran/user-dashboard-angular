// import { Component } from '@angular/core';
// import { CommonModule } from "@angular/common"; 
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// // import { AppRoutingModule } from './app-routing.module';
// // import { AppComponent } from './app.component';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { MatToolbarModule } from "@angular/material/toolbar"; 
// import { MatFormFieldModule } from "@angular/material/form-field";
// import { MatInputModule } from '@angular/material/input';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})


export class HeaderComponent {
  constructor(private router: Router) {}

  onSearch(id: string) {
    if (id) {
      this.router.navigate(['/user', id]);
    }
  }
}


