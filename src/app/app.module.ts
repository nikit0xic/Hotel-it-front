import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserTableComponent } from './user-table/user-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {HttpClient} from "@angular/common/http";
import { HttpClientModule } from "@angular/common/http";
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


@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    DialogOverview
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
        MatIconModule
    ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
  entryComponents: [UserTableComponent]
})
export class AppModule { }
