import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService implements OnInit {

  private apiUrl = 'http://localhost:5004/tasks';

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }


  deleteTask(task: Task): Observable<Task> {
    const url = '${this.apiUrl}/${task.id}'
    return this.http.delete<Task>(url);

  }
}
