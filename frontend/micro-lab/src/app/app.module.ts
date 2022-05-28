import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { HomeComponent } from './page/home/home.component';
import { PhysicianComponent } from './page/physician/physician.component';
import { HttpClientModule } from '@angular/common/http';
import { ListingTableComponent } from './common/listing-table/listing-table.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { FooterComponent } from './common/footer/footer.component';
import { TestCardComponent } from './page/test-card/test-card.component';
import { LoginComponent } from './page/login/login.component';
import { SidebarAdminComponent } from './common/sidebar-admin/sidebar-admin.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    PhysicianComponent,
    ListingTableComponent,
    SidebarComponent,
    FooterComponent,
    TestCardComponent,
    LoginComponent,
    SidebarAdminComponent
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
