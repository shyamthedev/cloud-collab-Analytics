import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './providers/auth.service';
import { ProfileComponent } from './views/profile/profile.component';
import { HttpClientModule } from "@angular/common/http";
import { MapsComponent } from './views/maps/maps.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    MapsComponent],
   
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDnsjl3OkMu6jvl6XOlyGN2DFFDDw1kbGc'
    }),
    AppRoutingModule,HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
