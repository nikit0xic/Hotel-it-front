import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { HomeComponent } from 'src/app/home/home.component';
import { ProfileComponent } from 'src/app/profile/profile.component';
import { Employees } from 'src/app/employees/employees.component';
import {RoadmapComponent} from "./app/roadmap/roadmap.component";
import {ClientsListComponent} from "./app/clients-list/clients-list.component";
import {ReferencesComponent} from "./app/references/references.component";
import {WorkingTimeComponent} from "./app/working-time/working-time.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'employees', component: Employees },
  { path: 'clients', component: ClientsListComponent},
  {path: 'rooms', component: RoadmapComponent},
  {path: 'references', component: ReferencesComponent},
  {path: 'working-time', component: WorkingTimeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
