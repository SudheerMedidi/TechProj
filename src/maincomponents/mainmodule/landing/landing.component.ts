import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  public employeeDetails: any;
  employeeWorkingProjects: any;
  constructor(
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.employeeDetails = [];
    this.employeeWorkingProjects = [];
    this.getemployeeDetails();
    this.getEmployeeProjects()

  }
  getemployeeDetails() {
    this.employeeDetails =
      [{
        name: 'Sudheer', email: 'medidi.sudheer.039@gmail.com', phone: '8790156655', qualification: 'B.tech', location: 'Amalapuram',
        projects: [{ projectName: 'Yahoo Project' }, { projectName: 'Google Project' }, { projectName: 'Tesla Project' }, { projectName: 'Employee Management project' }]
      }]
  }
  getEmployeeProjects() {
    this.employeeWorkingProjects =
      [ {id:1, projectName: 'StudentManagementProject',startdate: 'Dec 21 2019', position:'Asst Team Leader',status: 'deployed' }, {id:2, projectName: 'StoreMaintainenceProject',startdate: 'Jan 21 2019',position:'Team Member',status:'InTest' }, { id:3,projectName: 'OnlineBooksSellingProject',startdate: 'Mar 2 2019',position:'Project Co-ordinator',status:'InProgress' }, {id:4, projectName: 'EmployeeManagementproject',startdate: 'Feb 21 2020',position:'Team Lead' , status:'HandledToClient'}, ]
  }
  onClick(ev): void {
console.log(ev);
// this.router.navigateByUrl('Projects');
this.router.navigate(['projects'], { queryParams: { 'id': ev } });

  }
}
