import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-container',
  templateUrl: './to-do-container.component.html',
  styleUrls: ['./to-do-container.component.css']
})
export class ToDoContainerComponent implements OnInit {

toDOList =[{name: 'eat', completed: false}];
  constructor() { }

  ngOnInit() {
  }

}
