import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { TodolistComponent } from './todolist/todolist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodolistComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})

export class AppComponent {
  title = 'todolist';
  favoriteColor = '';  
}
