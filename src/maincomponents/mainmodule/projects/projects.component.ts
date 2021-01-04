import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../Services/projectsService';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public id: any;
  data: any;

  constructor(
  private activatedRoute: ActivatedRoute,
  private projectService: ProjectsService

  ) { }

  ngOnInit(): void {
  this.id = this.activatedRoute.snapshot.queryParams.id;
  this.id = this.id === undefined? 0:this.id;
this.getProjectById();
  }
getProjectById() {
  this.id = Number(this.id);
 this.data = this.projectService.GetProjectDetails(this.id);
}

}
