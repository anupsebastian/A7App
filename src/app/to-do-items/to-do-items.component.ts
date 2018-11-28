import { Component, OnInit, EventEmitter,Input, Output } from '@angular/core';
import {Item} from '../item.model';

@Component({
  selector: 'app-to-do-names',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})
export class ToDoItemsComponent implements OnInit {

  constructor() { }
  @Input() toDoArray:Item[];
  @Output() ItemsEmmiterFn1 = new EventEmitter<object>();
  ngOnInit() {
  
  }
  handleComplete (event) {
    // let index = this.toDoArray.findIndex(a => a.id === event.id);
    // this.toDoArray[index] = event;
    this.ItemsEmmiterFn1.emit(event);    
  }

}
