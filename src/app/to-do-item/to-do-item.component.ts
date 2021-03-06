import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Item } from "../item.model";

@Component({
  selector: "app-to-do-item",
  templateUrl: "./to-do-item.component.html",
  styleUrls: ["./to-do-item.component.css"]
})
export class ToDoItemComponent implements OnInit {
  constructor() {}
  @Input() item;
  // @Output() completedItem = new EventEmitter<object>();
  ngOnInit() {}

  onClick() {
    // Mistake was here. You created new property here 'this.item.completed'
    this.item.isCompleted = !this.item.isCompleted;

    // this.completedItem.emit(this.item);
  }
}
