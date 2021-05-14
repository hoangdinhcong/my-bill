/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/unbound-method */
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { Bill } from 'src/app/models/bill';
import { BillType } from 'src/app/models/bill-type.enum';
import { BillService } from 'src/app/services/bill.service';

@UntilDestroy()
@Component({
  selector: 'app-bill-form',
  templateUrl: './bill-form.component.html',
  styleUrls: ['./bill-form.component.scss']
})
export class BillFormComponent implements OnInit {

  billForm!: FormGroup;

  @Input() data: Bill = {
    id: '',
    name: '',
    createdDate: null,
    involvedRoommate: [],
    isPaid: false,
    paidRoommate: null,
    total: 0,
    type: BillType.Other
  }

  constructor(private fb: FormBuilder, private billService: BillService, private modal: NzModalRef) { }

  ngOnInit(): void {
    this.billForm = this.fb.group({
      name: [this.data?.name, [Validators.required]],
      createdDate: [this.data?.createdDate ?? new Date(), [Validators.required]],
      involvedRoommate: this.fb.array(this.data?.involvedRoommate ?? [], [Validators.required]),
      isPaid: [this.data?.isPaid ?? false, [Validators.required]],
      paidRoommate: [this.data?.paidRoommate],
      total: [this.data?.total ?? 0, [Validators.required]],
      type: [this.data?.type ?? BillType.Other, [Validators.required]],
    });
  }


  destroyModal(): void {
    this.modal.destroy();
  }

  submit(): void {

    const newData: Bill = {
      id: this.data?.id,
      name: this.billForm.get('name').value,
      createdDate: this.billForm.get('createdDate').value,
      involvedRoommate: this.billForm.get('involvedRoommate').value,
      isPaid: this.billForm.get('isPaid').value,
      paidRoommate: this.billForm.get('paidRoommate').value,
      total: this.billForm.get('total').value,
      type: this.billForm.get('type').value,
    };

    if (newData.id) {
      this.billService.update(newData).pipe(untilDestroyed(this)).subscribe(() => this.destroyModal());
    } else {
      this.billService.create(newData).pipe(untilDestroyed(this)).subscribe(() => this.destroyModal());
    }
  }

}
