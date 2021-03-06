import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { BillComponent } from './bill/bill.component';
import { RoommateComponent } from './roommate/roommate.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { BillFormComponent } from './bill/bill-form/bill-form.component';
import { RoommateFormComponent } from './roommate/roommate-form/roommate-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';


@NgModule({
  declarations: [BillComponent, RoommateComponent, AdminComponent, BillFormComponent, RoommateFormComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,

    NzTableModule,
    NzPopconfirmModule,
    NzMessageModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzCheckboxModule,
    NzSelectModule,
    NzCardModule,
    NzProgressModule,
    NzInputNumberModule,
  ],
  providers: [
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'VND' },
    // { provide: LOCALE_ID, useValue: 'vi-VN' }
  ]
})
export class AdminModule { }
