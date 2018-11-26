import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})

export class AddItemComponent implements OnInit {

  serverName ='test';      
  constructor() { }
  @Input() toDoArray;
  ngOnInit() {
  }
  
  test() {
      let newItem ={name:this.serverName, completed: false}
    this.toDoArray.push(newItem);
      console.log(this.toDoArray);
  }
}
