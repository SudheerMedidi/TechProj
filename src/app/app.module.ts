import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/layout/layout/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainmoduleModule } from 'src/maincomponents/mainmodule/mainmodule.module';
import { FooterComponent } from 'src/layout/layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,HeaderComponent,FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainmoduleModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
