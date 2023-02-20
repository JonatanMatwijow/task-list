import { Component, OnInit } from '@angular/core';
import { TASKS} from '../../mock-task';
import { task } from '../../Task';





@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})



export class TasksComponent implements OnInit {


  
  task: task[] = TASKS;

  constructor(){}

  ngOnInit(): void {
    
  }
}
