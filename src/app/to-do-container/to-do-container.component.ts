import { Component, OnInit, OnChanges } from "@angular/core";
import { Item } from "../item.model";

@Component({
  selector: "app-to-do-container",
  templateUrl: "./to-do-container.component.html",
  styleUrls: ["./to-do-container.component.css"]
})
export class ToDoContainerComponent implements OnInit, OnChanges{
  toDOList = [new Item(0, "eat", false)];
  RI: number =this.toDOList.length;
  constructor() {}

  ngOnInit() {
  }
  ngOnChanges() {
      console.log(this.RI)
      

  }  

}
