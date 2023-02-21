import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  title: String = 'Task-list';
  showAddTask:boolean = true;
  Subscription?: Subscription;

  constructor(private uiService : UiService ) { 
    this.Subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
  }

  ngOnInit(): void {
  }

  

  toggleAddTask() {
    console.log("Agregando el toggleAddTask");
    this.uiService.toggleAddTask();
  }

}
