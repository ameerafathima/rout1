import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimecardComponent } from "./timecard.component";

export const routes: Routes = [
    {
        path:'',
        component: TimecardComponent
      }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class TimecardRoutingModule { }