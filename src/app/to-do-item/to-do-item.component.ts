import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-to-do-item",
  templateUrl: "./to-do-item.component.html",
  styleUrls: ["./to-do-item.component.css"]
})
export class ToDoItemComponent implements OnInit {
  constructor() {}
  @Input() item;
  @Output() completedItem = new EventEmitter<object>();
  ngOnInit() {}

  onClick(event: Event) {
    console.log(" to Do Item compenent onClick functions")
    let newValue = {name: this.item.name, completed: !this.item.completed};
    this.completedItem.emit(newValue);
  }
}
