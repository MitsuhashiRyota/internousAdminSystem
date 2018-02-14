import { Routes, RouterModule } from '@angular/router';

// Component List

// Admin
import { AdminComponent } from './admin/admin.component';

// MonthSelect
import { MonthSelectComponent } from './admin/month-select/month-select.component';

// Attendace
import { AttendanceComponent } from './admin/month-select/attendance/attendance.component';

// EditStudent
import { EditStudentComponent } from './edit-student/edit-student.component';

// EditAdmin
import { EditAdminComponent } from './edit-admin/edit-admin.component';

/**
 * ルーティング基本設定
 */
const myRoutes : Routes = [
    { path: '', component: AdminComponent },
    { path: 'monthselect', component: MonthSelectComponent },
    { path: 'attendance', component: AttendanceComponent },
    { path: 'editstudent', component: EditStudentComponent },
    { path: 'editadmin', component: EditAdminComponent },
    { path: '**', redirectTo: '/' }
]

/**
 * ルーティング基本設定反映定数
 */
export const Routing = RouterModule.forRoot(myRoutes);