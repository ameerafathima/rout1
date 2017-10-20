import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from "./project.component";
import { NewprojectComponent } from "./newproject/newproject.component";

export const routes: Routes = [
  {
      path: '',
      component: ProjectComponent,
  },
  {  
      path: 'newproject',
      component: NewprojectComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProjectRoutingModule { }





