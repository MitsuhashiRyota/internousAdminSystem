import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routing } from './app.routing';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { SearchStudentComponent } from './edit-student/search-student/search-student.component';
import { ResultStudentComponent } from './edit-student/result-student/result-student.component';
import { SelectStudentComponent } from './edit-student/select-student/select-student.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { SearchAdminComponent } from './edit-admin/search-admin/search-admin.component';
import { ResultAdminComponent } from './edit-admin/result-admin/result-admin.component';
import { SelectAdminComponent } from './edit-admin/select-admin/select-admin.component';
import { MonthSelectComponent } from './admin/month-select/month-select.component';
import { AttendanceComponent } from './admin/month-select/attendance/attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    EditStudentComponent,
    SearchStudentComponent,
    ResultStudentComponent,
    SelectStudentComponent,
    EditAdminComponent,
    SearchAdminComponent,
    ResultAdminComponent,
    SelectAdminComponent,
    MonthSelectComponent,
    AttendanceComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    RouterModule,
    HttpModule,
    FormsModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
