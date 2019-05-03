import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  name = '';
  employees = [];

  constructor() { }

  ngOnInit() {
  }

  addEmployee() {
    this.employees.push(this.name);
    alert(this.employees)
  }

}
