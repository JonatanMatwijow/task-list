import { Component, Output, EventEmitter} from '@angular/core';
import { Task } from '../../Task';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
@Output() onAddTask:EventEmitter<Task>=new EventEmitter();

  text:string = "";
  day:string = "";
  reminder:boolean = false;
showAddTask:boolean = false;
Subscription?: Subscription;

  constructor(private uiService : UiService ) { 
    this.Subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
  }



  onSubmit(){
    if(this.text.length===0){
      alert("Debes de agregar una tarea");
      return 
    }
    const {text, day, reminder} = this 
    const newTask = {text, day, reminder}

    this.onAddTask.emit(newTask);
  }
  
}
