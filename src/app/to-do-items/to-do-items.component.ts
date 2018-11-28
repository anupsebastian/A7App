import { Component, OnInit, Input } from '@angular/core';
import {Item} from '../item.model';

@Component({
  selector: 'app-to-do-names',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})
export class ToDoItemsComponent implements OnInit {

  constructor() { }
  @Input() toDoArray:Item[];
  ngOnInit() {
  
  }
  handleComplete (event) {
    let index = this.toDoArray.findIndex(a => a.id === event.id);
    console.log("in ToDoItemsComponent Component")
    console.log(index);
    this.toDoArray[index] = event;    
  }

}
