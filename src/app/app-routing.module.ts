import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from 'src/layout/layout/layout.module';
import { LandingComponent } from 'src/maincomponents/mainmodule/landing/landing.component';
import { ProjectsComponent } from 'src/maincomponents/mainmodule/projects/projects.component';
import { ResumeComponent } from 'src/maincomponents/mainmodule/resume/resume.component';
import { AngularMaterial } from './angular-material-module';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'viewResume',
    component: ResumeComponent,
  }, {
    path: 'projects',
    component: ProjectsComponent,
  },
];

@NgModule({
  declarations: [
    LandingComponent,
    ResumeComponent,
    ProjectsComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AngularMaterial,
    LayoutModule,
    HttpClientModule,

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
