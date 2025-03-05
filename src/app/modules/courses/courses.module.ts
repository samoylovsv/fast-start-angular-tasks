import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseItemComponent } from './components/course-item/course-item.component';
import {CoreModule} from "../core/core.module";



@NgModule({
    declarations: [
        CoursesComponent,
        CourseItemComponent
    ],
    exports: [
        CoursesComponent
    ],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class CoursesModule { }
