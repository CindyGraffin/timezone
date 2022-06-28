import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HorlogeComponent } from './horloge/horloge.component';
import { HorlogeContainerComponent } from './horloge-container/horloge-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HorlogeComponent,
    HorlogeContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
