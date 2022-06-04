import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { HomeComponent } from './page/home/home.component';
import { PhysicianComponent } from './page/physician/physician.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { TestCardComponent } from './page/test-card/test-card.component';
import { LoginComponent } from './page/login/login.component';
import { AdminComponent } from './page/admin/admin.component';
import { HeaderComponent } from './common/header/header.component';
import { CountPipe } from './pipe/count.pipe';
import { PatientComponent } from './page/patient/patient.component';
import { SampleComponent } from './page/sample/sample.component';
import { TestComponent } from './page/test/test.component';
import { ReagentComponent } from './page/reagent/reagent.component';
import { DataTableModule } from './data-table/data-table.module';
import { PatientEditComponent } from './page/patient-edit/patient-edit.component';
import { PhysicianEditComponent } from './page/physician-edit/physician-edit.component';
import { ReagentEditComponent } from './page/reagent-edit/reagent-edit.component';
import { SampleEditComponent } from './page/sample-edit/sample-edit.component';
import { TestEditComponent } from './page/test-edit/test-edit.component';
import { FooterComponent } from './common/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    PhysicianComponent,
    SidebarComponent,
    TestCardComponent,
    LoginComponent,
    AdminComponent,
    HeaderComponent,
    CountPipe,
    PatientComponent,
    SampleComponent,
    TestComponent,
    ReagentComponent,
    PatientEditComponent,
    PhysicianEditComponent,
    ReagentEditComponent,
    SampleEditComponent,
    TestEditComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
