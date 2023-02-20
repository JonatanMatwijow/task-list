import { Injectable, OnInit } from '@angular/core';
import{HttpClient, HttpHandler} from '@angular/common/http'

import { Observable} from 'rxjs';
import { task } from '../Task';


@Injectable({
  providedIn: 'root'
})



export class TaskService {

  private apiUrl = "http://localhost:5004/tasks"
  constructor(
    private http:HttpClient
  ) { }

  getTasks() : Observable<task[]>
  {
    return this.http.get<task[]>(this.apiUrl);
  }
}
