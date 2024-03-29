import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {  Routes, RouterModule} from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ButtonComponent } from './component/button/button.component';
import { TasksComponent } from './component/tasks/tasks.component';
import { TasksItemComponent } from './component/tasks-item/tasks-item.component';
import { AddTaskComponent } from './component/add-task/add-task.component';
import { AboutComponent } from './component/about/about.component';
import { FooterComponent } from './component/footer/footer.component';

const appRoute:Routes = [
  {path: "", component:TasksComponent},
  {path: "about", component:AboutComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TasksItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forRoot(appRoute, {enableTracing:true})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
