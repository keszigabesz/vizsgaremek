import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './page/admin/admin.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { PatientComponent } from './page/patient/patient.component';
import { PhysicianComponent } from './page/physician/physician.component';
import { ReagentComponent } from './page/reagent/reagent.component';
import { SampleComponent } from './page/sample/sample.component';
import { TestCardComponent } from './page/test-card/test-card.component';
import { TestComponent } from './page/test/test.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'physician',
    component: PhysicianComponent,
  },
  {
    path: 'patient',
    component: PatientComponent,
  },
  {
    path: 'sample',
    component: SampleComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'reagent',
    component: ReagentComponent,
  },
  {
    path: 'test-card',
    component: TestCardComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
