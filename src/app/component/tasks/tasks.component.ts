import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task } from '../../Task';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})


export class TasksComponent implements OnInit {

  task: Task[] = [];

  constructor(
    private TaskService: TaskService
  ) { }


  ngOnInit(): void {
    this.TaskService.getTasks()
      .subscribe(task => this.task = task);

  }

  deleteTask(task: Task) {
    this.TaskService.deleteTask(task).subscribe();
      this.task = this.task.filter((t) => (t.id !== task.id))
  }
}