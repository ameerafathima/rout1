import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";

export const routes: Routes = [
  { 
    path: 'project',
    loadChildren: './project/project.module#ProjectModule' 
  },
  { 
    path: 'timecard',
    loadChildren: './timecard/timecard.module#TimecardModule' 
  },
  {
    path:"**",
    redirectTo:"home",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }




