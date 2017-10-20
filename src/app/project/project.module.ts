import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { NewprojectComponent } from './newproject/newproject.component';
import { ProjectRoutingModule } from './project-routing.module';

@NgModule({
  imports: [
    CommonModule,
     ProjectRoutingModule,
  ],
  declarations: [
    ProjectComponent,
    NewprojectComponent,
  ]
})

export class ProjectModule {
  constructor
  (){
     console.log("")
  }
}
