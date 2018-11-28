import {
  Component,
  OnInit,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  EventEmitter
} from "@angular/core";
import { Item } from "../item.model";

@Component({
  selector: "app-add-item",
  templateUrl: "./add-item.component.html",
  styleUrls: ["./add-item.component.css"]
})
export class AddItemComponent implements OnInit, OnChanges {
  @Input() toDoArray;
  @Input() remainingItems;
  private taskName = "drink";
  private itemCount: number = 0;
  @Output() AddNewItemFn1 = new EventEmitter<object>();
  private RI: number = 0;
  constructor() {}

  ngOnInit() {
      this.RI = this.calculateRI(this.toDoArray);
  }

  ngOnChanges(changes: SimpleChanges ) {
  
    this.RI = this.calculateRI(this.toDoArray);
 }

  calculateRI(items: Item[]) {
    const result = items.filter(item => item.isCompleted == false);
    return result.length;
  }

  addItem() {
    this.itemCount += 1;
    let newItem = new Item(this.itemCount, this.taskName, false);
 this.AddNewItemFn1.emit(newItem); 
}
}
