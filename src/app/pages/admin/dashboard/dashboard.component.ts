import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  futureFeatures: Array<{ name: string, description: string, progress: number }> = [
    { name: 'Quản lý nợ', description: 'Xem ai còn nợ bao nhiêu tiền, những tiền gì', progress: 0 },
    { name: 'Quản lý phạt', description: 'Phạt khi chưa quét nhà...', progress: 0 },
    { name: 'Quản lý công việc', description: 'Quét nhà, lau nhà, người dùng tự tick khi làm xong', progress: 0 },
    { name: 'Widget', description: 'Xem ai còn nợ bao nhiêu', progress: 0 },
    { name: 'Widget', description: 'Tổng số tiền đã chi theo tháng', progress: 0 },
    { name: 'Widget', description: 'tổng số tiền đã chi cho từng bill type', progress: 0 },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
