import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhoneDirectoryComponent } from './phone-directory/phone-directory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
   declarations: [
      AppComponent,
      PhoneDirectoryComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
