import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserTableComponent } from './user-table/user-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {HttpClient} from "@angular/common/http";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import {DialogOverview} from './user-dialog/user-dialog.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {MatNativeDateModule} from "@angular/material/core";
import {MatTabsModule} from "@angular/material/tabs";
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { Employees } from './employees/employees.component';
import {AppRoutingModule} from "../app-routing.module";
import {authInterceptorProviders} from "./helpers/auth.interceptor";
import {MatMenuModule} from "@angular/material/menu";
import { RoadmapComponent } from './roadmap/roadmap.component';
import {FullCalendarModule} from "@fullcalendar/angular";
import resourceTimeline from '@fullcalendar/resource-timeline';
import {MatCardModule} from "@angular/material/card";
import { ClientsListComponent } from './clients-list/clients-list.component';
import { ReferencesComponent } from './references/references.component';
import { ReferenceCardComponent } from './reference-card/reference-card.component';
import { WorkingTimeComponent } from './working-time/working-time.component';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  resourceTimeline
]);

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    DialogOverview,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    Employees,
    RoadmapComponent,
    ClientsListComponent,
    ReferencesComponent,
    ReferenceCardComponent,
    WorkingTimeComponent
  ],
  imports: [
    BrowserModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatPaginatorModule,
    FormsModule,
    MatDatepickerModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatTabsModule,
    AppRoutingModule,
    MatMenuModule,
    FullCalendarModule,
    MatCardModule
  ],
  providers: [HttpClient, authInterceptorProviders],
  bootstrap: [AppComponent],
  entryComponents: [UserTableComponent]
})
export class AppModule { }
