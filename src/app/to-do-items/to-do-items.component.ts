import { Component, OnInit, Input, DoCheck } from '@angular/core';
import {Item} from '../item.model';

@Component({
  selector: 'app-to-do-names',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})
export class ToDoItemsComponent implements OnInit, DoCheck {

  constructor() { }
  @Input() toDoArray;
  ngOnInit() {
  
  }

  ngDoCheck() {
    console.log(this.toDoArray);
  }

  
  // handleComplete (event) {
  //   let index = this.toDoArray.findIndex(a => a.id === event.id);
  //   console.log(index);
  //   this.toDoArray[index] = event;    
  // }

}
