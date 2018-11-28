import { Component, OnInit, Input, OnChanges,  SimpleChange} from "@angular/core";
import {Item} from '../item.model';

@Component({
  selector: "app-add-item",
  templateUrl: "./add-item.component.html",
  styleUrls: ["./add-item.component.css"]
})
export class AddItemComponent implements OnInit, OnChanges {
  taskName = "drink";
  itemCount: number = 0;
  constructor() {}
  @Input() toDoArray;
  @Input() remainingItems;
  ngOnInit() {


  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    console.log(this.remainingItems);
  }


  addItem() {
    this.itemCount += 1;
    let newItem = new Item(this.itemCount, this.taskName, false);
    this.toDoArray.push(newItem);
    const newArray=this.toDoArray.filter((item) => {
        console.log(item);
        return item.isCompleted==true;
    })
    console.log(newArray);

  }
}
