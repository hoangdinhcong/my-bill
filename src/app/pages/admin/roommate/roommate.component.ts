import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { RoommateService } from '../../../services/roommate.service';
import { Roommate } from '../../../models/roommate';
import { NzModalService } from 'ng-zorro-antd/modal';
import { RoommateFormComponent } from './roommate-form/roommate-form.component';

@UntilDestroy()
@Component({
  selector: 'app-roommate',
  templateUrl: './roommate.component.html',
  styleUrls: ['./roommate.component.scss']
})
export class RoommateComponent implements OnInit {

  roommateList: Roommate[];

  constructor(private roommateService: RoommateService, private message: NzMessageService, private modalService: NzModalService) { }

  ngOnInit(): void {
    this.roommateService.getList().pipe(untilDestroyed(this)).subscribe((res) => {
      this.roommateList = res;
      console.log(this.roommateList);
    });
  }

  removeRoommate(roommate: Roommate): void {
    this.roommateService.delete(roommate).pipe(untilDestroyed(this)).subscribe(() => {
      this.message.success(`Remove ${roommate.name} success`);
    });
  }

  editRoommate(roommate: Roommate): void {
    this.modalService.create({
      nzTitle: 'Edit Roommate',
      nzContent: RoommateFormComponent,
      nzComponentParams: {
        data: roommate
      },
    });
  }

  addRoommate(): void {
    this.modalService.create({
      nzTitle: 'Add Roommate',
      nzContent: RoommateFormComponent,
    });
  }


}
