/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/unbound-method */
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NzModalRef } from 'ng-zorro-antd/modal';

import { Roommate } from 'src/app/models/roommate';
import { RoommateService } from '../../../../services/roommate.service';

@UntilDestroy()
@Component({
  selector: 'app-roommate-form',
  templateUrl: './roommate-form.component.html',
  styleUrls: ['./roommate-form.component.scss']
})
export class RoommateFormComponent implements OnInit {

  roommateForm!: FormGroup;

  @Input() data: Roommate = {
    id: '',
    name: '',
    isActive: true
  }

  constructor(private fb: FormBuilder, private roommateService: RoommateService, private modal: NzModalRef) { }

  ngOnInit(): void {
    this.roommateForm = this.fb.group({
      name: [this.data?.name, [Validators.required]],
      isActive: [this.data?.isActive ?? false, [Validators.required]],
    });
  }


  destroyModal(): void {
    this.modal.destroy();
  }

  submit(): void {

    const newData: Roommate = {
      id: this.data?.id,
      name: this.roommateForm.get('name').value,
      isActive: this.roommateForm.get('isActive').value
    };

    if (newData.id) {
      this.roommateService.update(newData).pipe(untilDestroyed(this)).subscribe(() => this.destroyModal());
    } else {
      this.roommateService.create(newData).pipe(untilDestroyed(this)).subscribe(() => this.destroyModal());
    }
  }


}
