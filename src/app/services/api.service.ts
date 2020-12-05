import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getToDos(){
    return this.httpClient.get('http://localhost:3000/api/todo');
  }

  postToDo(todo, image){
    const formData = new FormData();
    formData.append('title' , todo.title);
    formData.append('description' , todo.description);
    formData.append('image' , image);
    return this.httpClient.post('http://localhost:3000/api/todo', formData);
  }

}
