import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksHeaderComponent } from './components/tasks-header/tasks-header.component';
import { TasksDetailsComponent } from './components/tasks-details/tasks-details.component';
import { TasksViewComponent } from './components/tasks-view/tasks-view.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { FormsModule } from '@angular/forms';
import { MainPopupComponent } from './shared/main-popup/main-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksHeaderComponent,
    TasksDetailsComponent,
    TasksViewComponent,
    LayoutsComponent,
    MainPopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
