import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillComponent } from './bill/bill.component';
import { RoommateComponent } from './roommate/roommate.component';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      {
        path: 'bill', component: BillComponent,
      },
      {
        path: 'roommate', component: RoommateComponent,
      },
      {
        path: 'dashboard', component: DashboardComponent,
      },
      {
        path: '', redirectTo: 'dashboard'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
