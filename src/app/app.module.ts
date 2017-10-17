import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { InputButtonDropdownModule } from './input-button-dropdown/input-button-dropdown.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    InputButtonDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
