import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignComponent } from './sign/sign.component';
import { AdminComponent } from './admin/admin.component';
import { VivekComponent } from './vivek/vivek.component';

@NgModule({
  declarations: [
    AppComponent,
    SignComponent,
    AdminComponent,
    VivekComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
