import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { task } from '../../Task';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})


export class TasksComponent implements OnInit {

  task: task[] = [];

  constructor(
    private TaskService: TaskService
  ) { }


  ngOnInit(): void {
    this.TaskService.getTasks()
      .subscribe(task => this.task = task);

  }
}
