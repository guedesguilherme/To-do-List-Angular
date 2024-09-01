import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

interface Task {
  taskName: string;
  isCompleted: boolean;
}

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {

  taskArray: Task[] = [
    { taskName: 'Escovar os dentes', isCompleted: false }
  ];

  onSubmit(form: NgForm) {
    console.log(form)
    console.log('Form data:', form.value);  

    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    })
  };

  task = {
    name: ''
  };

  onDelete(index: number) {
    console.log(index);

    this.taskArray.splice(index, 1);
  }
}
