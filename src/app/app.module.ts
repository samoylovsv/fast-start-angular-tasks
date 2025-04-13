import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesModule } from './modules/courses/courses.module';
import { CoreModule } from './modules/core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoursesModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
