import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimecardComponent } from "app/timecard/timecard.component";
import { TimecardRoutingModule } from './timecard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TimecardRoutingModule
  ],
  declarations: [
    TimecardComponent
  ]
})
export class TimecardModule { }
