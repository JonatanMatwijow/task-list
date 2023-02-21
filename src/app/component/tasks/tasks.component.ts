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
      .subscribe((tasks) => (this.task = tasks));
  }


  deleteTask(task: Task) {
    this.TaskService
      .deleteTask(task)
      .subscribe(
        (task) => this.task = this.task.filter((t) => (t.id !== task.id))
      )

      console.log("deberia de borrar");
  }


  toggleReminder(task: Task) {
    task.reminder = !task.reminder
    this.TaskService.updateTaskReminder(task).subscribe();
  }

}