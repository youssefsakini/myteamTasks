import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksHeaderComponent } from './components/tasks-header/tasks-header.component';
import { TasksDetailsComponent } from './components/tasks-details/tasks-details.component';
import { TasksViewComponent } from './components/tasks-view/tasks-view.component';
import { LayoutsComponent } from './layouts/layouts.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksHeaderComponent,
    TasksDetailsComponent,
    TasksViewComponent,
    LayoutsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
