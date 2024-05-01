import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GtagModule} from 'angular-gtag'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GtagModule.forRoot({ trackingId: 'G-DT1W5DPZR9', trackPageviews: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
