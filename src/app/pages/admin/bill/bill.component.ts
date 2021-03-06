import { Component, OnInit } from '@angular/core';
import { BillService } from '../../../services/bill.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Bill } from 'src/app/models/bill';
import { BillFormComponent } from './bill-form/bill-form.component';
import { ViewModel } from '../../../models/view-model';

@UntilDestroy()
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {

  billList: ViewModel<Bill>[];

  constructor(private billService: BillService, private message: NzMessageService, private modalService: NzModalService) { }

  ngOnInit(): void {
    this.billService.getList().pipe(untilDestroyed(this)).subscribe((res) => {
      this.billList = res;
      console.log(this.billList);
    });
  }

  removeBill(bill: ViewModel<Bill>): void {
    this.billService.delete(bill.id).pipe(untilDestroyed(this)).subscribe(() => {
      this.message.success(`Remove ${bill.name} success`);
    });
  }

  editBill(bill: ViewModel<Bill>): void {
    this.modalService.create({
      nzTitle: 'Edit Bill',
      nzContent: BillFormComponent,
      nzComponentParams: {
        data: bill
      },
    });
  }

  addBill(): void {
    this.modalService.create({
      nzTitle: 'Add Bill',
      nzContent: BillFormComponent,
    });
  }

}
