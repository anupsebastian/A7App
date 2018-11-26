import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-to-do-names',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})
export class ToDoItemsComponent implements OnInit {

  constructor() { }
  @Input() toDoArray;
  ngOnInit() {
  
  }
  handleComplete (event) {
      console.log(event);
    let index = this.toDoArray.findIndex(a => a.name == event.name);
    this.toDoArray[index] = event;
    console.table(this.toDoArray);
    
  }

}
