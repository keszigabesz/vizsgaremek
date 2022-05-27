import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { HomeComponent } from './page/home/home.component';
import { PhysicianComponent } from './page/physician/physician.component';
import { HttpClientModule } from '@angular/common/http';
import { ListingTableComponent } from './common/listing-table/listing-table.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    PhysicianComponent,
    ListingTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
