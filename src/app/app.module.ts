import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { AddItemComponent } from "./add-item/add-item.component";
import { ToDoContainerComponent } from "./to-do-container/to-do-container.component";
import { ToDoItemsComponent } from "./to-do-items/to-do-items.component";
import { ToDoItemComponent } from "./to-do-item/to-do-item.component";
import {MatButtonModule, MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddItemComponent,
    ToDoContainerComponent,
    ToDoItemsComponent,
    ToDoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
