import { Component, OnInit, Input, OnChanges, SimpleChange, DoCheck } from "@angular/core";
import {Item} from '../item.model';

@Component({
  selector: "app-add-item",
  templateUrl: "./add-item.component.html",
  styleUrls: ["./add-item.component.css"]
})
export class AddItemComponent implements OnInit, DoCheck, OnChanges {
  taskName = "drink";
  itemCount: number = 0;
  private itemsCount;
  constructor() {}
  @Input() toDoArray;
  @Input() remainingItems;
  ngOnInit() {


  }

  ngDoCheck() {
    this.itemsCount = this.toDoArray.filter((toDo) => {
      console.log(toDo.isCompleted);
      return true ? toDo.isCompleted === false: false;
    });
    console.log(this.itemsCount);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
  }


  addItem() {
    this.itemCount += 1;
    let newItem = new Item(this.itemCount, this.taskName, false);
    this.toDoArray.push(newItem);
    console.log(this.toDoArray);
  }
}
