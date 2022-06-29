import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from 'src/app/register/register.component';
import { LoginComponent } from 'src/app/login/login.component';
import { HomeComponent } from 'src/app/home/home.component';
import { ProfileComponent } from 'src/app/profile/profile.component';
import { BoardUserComponent } from 'src/app/board-user/board-user.component';
import { BoardManagerComponent } from 'src/app/board-manager/board-manager.component';
import { Employees } from 'src/app/employees/employees.component';
import {RoadmapComponent} from "./app/roadmap/roadmap.component";
import {ClientsListComponent} from "./app/clients-list/clients-list.component";
import {ReferencesComponent} from "./app/references/references.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardManagerComponent },
  { path: 'employees', component: Employees },
  { path: 'clients', component: ClientsListComponent},
  {path: 'rooms', component: RoadmapComponent},
  {path: 'references', component: ReferencesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
