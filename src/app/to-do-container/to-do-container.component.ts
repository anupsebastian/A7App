import { Component, OnInit, OnChanges } from "@angular/core";
import { Item } from "../item.model";

@Component({
  selector: "app-to-do-container",
  templateUrl: "./to-do-container.component.html",
  styleUrls: ["./to-do-container.component.css"]
})
export class ToDoContainerComponent implements OnInit, OnChanges{
  toDOList = [new Item(0, "eat", false)];
  RI: number =this.calculateRI(this.toDOList);
  constructor() {}

  ngOnInit() {
    console.log("in Container Component, NGON INite")
  }

  calculateRI(items:Item[]) {

    const result =items.filter(item => item.isCompleted ==true);
    console.log("in Container Component")
    console.log(result);
    return result.length;
  }
  ngOnChanges() {
      console.log(this.RI)


  }  

}
