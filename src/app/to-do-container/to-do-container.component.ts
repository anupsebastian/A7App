import { Component, OnInit, OnChanges, DoCheck, SimpleChanges  } from "@angular/core";
import { Item } from "../item.model";

@Component({
  selector: "app-to-do-container",
  templateUrl: "./to-do-container.component.html",
  styleUrls: ["./to-do-container.component.css"]
})
export class ToDoContainerComponent implements OnInit, OnChanges, DoCheck {
  private toDOList = [new Item(0, "eat", false)];
  private RI: number =this.calculateRI(this.toDOList);
  constructor() {}

  ngOnInit() {

  }
  ngDoCheck() {
    console.log("ngDoCheckfn on ToDoContainerComponent");
  }
  calculateRI(items:Item[]) {

    const result =items.filter(item => item.isCompleted ==false);
    return result.length;
  }
  updateItemArray(event) {
      let index = this.toDOList.findIndex(a => a.id === event.id);
      this.toDOList[index] = event;
      this.RI =this.calculateRI(this.toDOList);

  }

  AddToItemArray(event) {
      this.toDOList.push(event);
      this.RI =this.calculateRI(this.toDOList);
  }
  ngOnChanges(changes: SimpleChanges ) {

  }  

}
